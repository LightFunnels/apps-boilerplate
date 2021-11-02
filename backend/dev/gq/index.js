const {handler} = require('../../bundle/src/api/index');
const fs = require('fs');

exports.handler = async function (event, ctx) {

  if(event.requestContext.http.method === 'OPTIONS'){
    return {
      statusCode: 200,
      headers: {},
      body: ""
    }
  } else if (event.requestContext.http.method === 'GET'){
    return {
      body: fs.readFileSync(__dirname + '/index.html'),
      statusCode:200,
      headers:{
        'Content-type': 'text/html'
      }
    }
  }


	// const token = utils.token(1);

  event.requestContext.authorizer = {
    lambda:{
      acid: 1
    }
  }
	
	// event.headers['authorization'] = `bearer ${token}`;
	// event.headers['account-id'] = 1;

	return handler(event, ctx);

}
