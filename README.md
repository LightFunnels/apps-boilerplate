- the front/webpack file is not completed and it won't work properly, please fix it with the mising rules.
- there must be another folder /lightfunnels-front where some files in /front/src imports some components from it. we don't want to keep using it, so 
you will be building the ui yourself, you can use one of these:
  - https://preview.tabler.io/
  - https://evergreen.segment.com/components
  or if you have a better one you can share it with us. as long as it's a reactJS.
- you must use relayjs https://relay.dev/
- you can check the /backend/src/lightfunnels/index.js for a demo to connect to lightfunnels
- we use aws sam to dpeloy the project, you can check /backend/template.yml for more informations on how each function is attached to the apigateway, but in development 
- we have a mocking server /backend/dev/index.js to reflect the ApiGateway environment
- check deploy.sh.example for env variables

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

To start the front: /front folder
1. copy .env.example to .env
2. set the backend url endpoint, default to http://localhost:9001/
3. run: yarn watch # to run webpack and serve the front
4. run: yarn relay --watch # to generate relay artifacts needed for the app
