- the front/webpack file is not completed and it won't work properly, please fix it with the mising rules.
- there must be another folder /lightfunnels-front where some files in /front/src imports some components from it. we don't want to keep using it, so 
you will be building the ui yourself, you can use one of these:
  - https://preview.tabler.io/
  - https://evergreen.segment.com/components
  or if you have a better one you can share it with us. as long as it's a reactJS.
- you must use relayjs https://relay.dev/
- you can check the /backend/src/lightfunnels/index.js for a demo to connect to lightfunnels
- we use aws sam to dpeloy the project, you can check /backend/template.yml for more informations on how each function is attached to the apigateway, but in development 
we have a mocking server /backend/dev/index.js
