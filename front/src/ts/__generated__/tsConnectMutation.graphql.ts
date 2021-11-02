/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type tsConnectMutationVariables = {
    shop: string;
    redirectUri: string;
};
export type tsConnectMutationResponse = {
    readonly connectShopifyUrl: string;
};
export type tsConnectMutation = {
    readonly response: tsConnectMutationResponse;
    readonly variables: tsConnectMutationVariables;
};



/*
mutation tsConnectMutation(
  $shop: String!
  $redirectUri: String!
) {
  connectShopifyUrl(shop: $shop, redirectUri: $redirectUri)
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "redirectUri"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "shop"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "redirectUri",
        "variableName": "redirectUri"
      },
      {
        "kind": "Variable",
        "name": "shop",
        "variableName": "shop"
      }
    ],
    "kind": "ScalarField",
    "name": "connectShopifyUrl",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "tsConnectMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "tsConnectMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "4497a6b329381708c7f9c908f1c2404c",
    "id": null,
    "metadata": {},
    "name": "tsConnectMutation",
    "operationKind": "mutation",
    "text": "mutation tsConnectMutation(\n  $shop: String!\n  $redirectUri: String!\n) {\n  connectShopifyUrl(shop: $shop, redirectUri: $redirectUri)\n}\n"
  }
};
})();
(node as any).hash = 'b66cff206bafed1bb98727544df187e4';
export default node;
