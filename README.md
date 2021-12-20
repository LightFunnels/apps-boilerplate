
<div align="center">
    <div align="center"><strong>Lightfunnels App Boilerplate.</strong></div>
    <div align="center">A kickstarter repository to create Lightfunnels apps faster</div>
    <br />
    <div align="center">
        <a href="https://lightfunnels.com/">Lightfunnels</a> 
        <span> · </span>
        <a href="https://www.facebook.com/groups/lightfunnels">FB Group</a>
    </div>
</div>

<br />

<hr />

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
we use aws sam to dpeloy the project, you can check /backend/template.yml for more informations on how each function is attached to the apigateway.

---

To start the backend: u need to run these commands: /backend folder
1. copy variables from deploy.sh.example into a .env file
2. request a lightfunnels's app from the team.
3. create a database 
4. run "yarn db" in the backend folder to set up the database and seed it
5. create a shopify app
6. fill .env file with the lightfunnels app keys, shopify keys, the database credentials.
    it must look like this: ![image](https://user-images.githubusercontent.com/11160251/140742247-b5689ae9-4f9e-4775-8898-bd98027f03da.png)

8. AppURL is the backend app url, default to http://localhost:9001/
9. run: yarn tsc -w # to watch ts and generate js
10. run: yarn start # to run the server
11. the backend will be accessible on : http://localhost:9001/

To start the front: /front folder
1. copy .env.example to .env
2. set the backend url endpoint, default to http://localhost:9001/
3. run: yarn install # must be YARN !!! and it won't work with npm.
4. run: yarn watch # to run webpack and serve the front
5. run: yarn relay --watch # to generate relay artifacts needed for the app
6. the front will be accessible on: http://localhost:9002/

understanding how the app works:
* the front is simple, there is a webpack file that contains all the configurations, you still need to run relay watch in a diffrent terminal tab to generate the required artifacts for relay to work. ( this is mostly Webpack and Relayjs confiurations, nothing fancy about it)
* the backend is a bit complex, when u run, yarn start, it runs /backend/dev/indx.js file which runs an expressjs server
* the server is configured to mock the ApiGateway (https://aws.amazon.com/api-gateway/) environment, each route is attached to a function that is triggered when requesting the endpoint.
* one of these functions has an authorizer ( https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html ) which is responsible for authorizing the requests comming to that endpoint


