/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type tsConnectRespMutationVariables = {
    query: string;
};
export type tsConnectRespMutationResponse = {
    readonly connectShopifyResponse: {
        readonly id: string;
        readonly shops: ReadonlyArray<{
            readonly _id: number;
            readonly id: string;
            readonly shop: string;
        }>;
    };
};
export type tsConnectRespMutation = {
    readonly response: tsConnectRespMutationResponse;
    readonly variables: tsConnectRespMutationVariables;
};



/*
mutation tsConnectRespMutation(
  $query: String!
) {
  connectShopifyResponse(query: $query) {
    id
    shops {
      _id
      id
      shop
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "query"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "query",
        "variableName": "query"
      }
    ],
    "concreteType": "Account",
    "kind": "LinkedField",
    "name": "connectShopifyResponse",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Shop",
        "kind": "LinkedField",
        "name": "shops",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "_id",
            "storageKey": null
          },
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "shop",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "tsConnectRespMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "tsConnectRespMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "1b1efaf2fa64eb6f73a5bcb47358d19f",
    "id": null,
    "metadata": {},
    "name": "tsConnectRespMutation",
    "operationKind": "mutation",
    "text": "mutation tsConnectRespMutation(\n  $query: String!\n) {\n  connectShopifyResponse(query: $query) {\n    id\n    shops {\n      _id\n      id\n      shop\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '45fa81b703e769ded215db3bd665e9ce';
export default node;
