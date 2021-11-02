#!/usr/bin/env node

// const debug = require('debug')('fb:server');
const http = require('http');
 
const express = require('express');
const app = express();
const cors = require('cors');
// const cookieParser = require('cookie-parser');
const fs = require('fs');
const {default: schema} = require('../bundle/src/api/schema/index');
const graphql = require('graphql');
const schemaPath = __dirname + '/../../front/src/schema.graphql';
const schemaString = graphql.printSchema(schema);
let oldSchemaString;
try {
  oldSchemaString = fs.readFileSync(schemaPath);
} catch (e) {}

if(schemaString !== oldSchemaString){
  fs.writeFileSync(
    schemaPath,
    schemaString
  );
  console.log('schema updated!');
}

// app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(function(req, res, next) {
  req.raw_body = '';
  req.setEncoding('utf8');
  req.on('data', function(chunk) { 
    req.raw_body += chunk;
  });
  req.on('end', function() {
    next();
  });
});

app.use(function(req, res, next){
  if(req.method === 'OPTIONS'){
    res.set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', '*')
    .set('Access-Control-Allow-Headers', '*');
  }
  next();
});
// routes only run in dev
app.use('/graphiql', convertExpressRequestToLambdaEventMiddleware(require('./gq/index').handler));

// routes that are mocked and run on real live app
app.use('/webhooks', convertExpressRequestToLambdaEventMiddleware(require('../bundle/src/webhooks/index').handler));
app.use('/lightfunnels', convertExpressRequestToLambdaEventMiddleware(require('../bundle/src/lightfunnels/index').handler));
app.use(
  '/api',
  convertExpressRequestToLambdaEventMiddleware(
    require('../bundle/src/api/index.js').handler,
    {
      authorizer: require('../bundle/src/authorizer/index.js').handler
    }
  )
);
app.use('/', (req, res) => res.end('done'));

const port = 9001;

app.set('port', port);

var server = http.createServer(app);

server.listen(port);
server.on('error', console.log);
server.on('listening', function () {
  console.log('listening on :', this.address().port);
});

function convertExpressRequestToLambdaEventMiddleware(handler, opts = {}) {
  return async function routeHandler(req, res, next) {

    let [rawPath, rawQueryString] = req.originalUrl.split('?');

    let event = {

      requestContext:{
        http:{
          method: req.method
        },
        authorizer:{
          lambda: null
        }
      },

      rawPath,
      rawQueryString,
      queryStringParameters: req.query,

      "headers": {
        ...req.headers,
        "x-forwarded-for": req.ip,
        "x-forwarded-port": "443",
        "x-forwarded-proto": req.protocol,
        "x-host": req.headers.host,
      },

      "body": req.raw_body,

      "cookies": !req.cookies ? [] : Object.keys(req.cookies).map(k => `${k}=${req.cookies[k]}`),

      "isBase64Encoded": false
    }

    if(opts.authorizer){
      let _res = await opts.authorizer({
        identitySource:[
          req.headers["authorization"] || ""
        ]
      }, {});
      if(!_res.isAuthorized){
        return res.status(401).end('');
      }
      event.requestContext.authorizer.lambda = _res.context;
    }

    let response = await handler(event, {});

    // now we convert lambda response to express response

    res.status(response.statusCode);

    let hs = response.multiValueHeaders || response.headers;

    for(var header in hs){
      res.set(header, hs[header]);
    }

    if(response.cookies){
      res.setHeader( 'Set-Cookie', response.cookies );
    }
    
    res.send(response.body);
  }
}
