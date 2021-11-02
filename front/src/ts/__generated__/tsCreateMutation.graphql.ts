/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type ConnectionInput = {
    shop_id: number;
    funnel_id: number;
};
export type tsCreateMutationVariables = {
    node: ConnectionInput;
};
export type tsCreateMutationResponse = {
    readonly createConnection: {
        readonly _id: number;
        readonly id: string;
        readonly shop: {
            readonly id: string;
            readonly shop: string;
        };
        readonly funnel: {
            readonly id: string;
            readonly name: string;
        } | null;
    };
};
export type tsCreateMutation = {
    readonly response: tsCreateMutationResponse;
    readonly variables: tsCreateMutationVariables;
};



/*
mutation tsCreateMutation(
  $node: ConnectionInput!
) {
  createConnection(node: $node) {
    _id
    id
    shop {
      id
      shop
    }
    funnel {
      id
      name
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "node"
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
        "name": "node",
        "variableName": "node"
      }
    ],
    "concreteType": "Connection",
    "kind": "LinkedField",
    "name": "createConnection",
    "plural": false,
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
        "concreteType": "Shop",
        "kind": "LinkedField",
        "name": "shop",
        "plural": false,
        "selections": [
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Funnel",
        "kind": "LinkedField",
        "name": "funnel",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
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
    "name": "tsCreateMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "tsCreateMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "85ee366932f98556a72500d8da0259dc",
    "id": null,
    "metadata": {},
    "name": "tsCreateMutation",
    "operationKind": "mutation",
    "text": "mutation tsCreateMutation(\n  $node: ConnectionInput!\n) {\n  createConnection(node: $node) {\n    _id\n    id\n    shop {\n      id\n      shop\n    }\n    funnel {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e050a43006be5249bc185e374be8f38d';
export default node;
