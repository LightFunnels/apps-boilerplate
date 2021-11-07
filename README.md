Techs used:
- graphql
- dataloader
- nodejs
- reactjs
- https://relay.dev/
- knexjs
- aws sam
- typescript
- lambda
- serverless

You must use one of these in front, or suggest something else:
- https://preview.tabler.io/
- https://evergreen.segment.com/components

If you are familiar with cloudformation please read the file: /backend/template.yml
we use aws sam to dpeloy the project, you can check /backend/template.yml for more informations on how each function is attached to the apigateway, but in development.

---

To start the backend: u need to run these commands: /backend folder
1. copy variables from deploy.sh.example into a .env file
2. request a lightfunnels's app from the team.
3. create a database 
4. create a shopify app
5. fill .env file with the lightfunnels app keys, shopify keys, the database credentials.
6. AppURL is the backend app url, default to http://localhost:9001/
7. run: yarn tsc -w # to watch ts and generate js
8. run: yarn start # to run the server
9. the backend will be accessible on : http://localhost:9001/

To start the front: /front folder
1. copy .env.example to .env
2. set the backend url endpoint, default to http://localhost:9001/
3. run: yarn watch # to run webpack and serve the front
4. run: yarn relay --watch # to generate relay artifacts needed for the app
5. the front will be accessible on: http://localhost:9002/

understanding how the app works:
* the front is simple, there is a webpack file that contains all the configurations, you still need to run relay watch in a diffrent terminal tab to generate the required artifacts for relay to work. ( this is mostly Webpack and Relayjs confiurations, nothing fancy about it)
* the backend is a bit complex, when u run, yarn start, it runs /backend/dev/indx.js file which runs an expressjs server
* the server is configured to mock the ApiGateway (https://aws.amazon.com/api-gateway/) environment, each route is attached to a function that is triggered when requesting the endpoint.
* one of these functions has an authorizer ( https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html ) which is responsible for authorizing the requests comming to that endpoint


