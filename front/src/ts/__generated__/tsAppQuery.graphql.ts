/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type tsAppQueryVariables = {
    offset?: number | null | undefined;
};
export type tsAppQueryResponse = {
    readonly records: ReadonlyArray<{
        readonly payment_id: number;
        readonly order_id: number;
        readonly shopify_order_id: string;
        readonly created_at: string;
    }>;
    readonly connections: ReadonlyArray<{
        readonly id: string;
        readonly _id: number;
        readonly shop: {
            readonly id: string;
            readonly shop: string;
        };
        readonly funnel: {
            readonly id: string;
            readonly name: string;
        } | null;
    }>;
    readonly account: {
        readonly id: string;
        readonly shops: ReadonlyArray<{
            readonly _id: number;
            readonly id: string;
            readonly shop: string;
        }>;
    };
};
export type tsAppQuery = {
    readonly response: tsAppQueryResponse;
    readonly variables: tsAppQueryVariables;
};



/*
query tsAppQuery(
  $offset: Int
) {
  records(offset: $offset) {
    payment_id
    order_id
    shopify_order_id
    created_at
  }
  connections {
    id
    _id
    shop {
      id
      shop
    }
    funnel {
      id
      name
    }
  }
  account {
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
    "name": "offset"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "shop",
  "storageKey": null
},
v4 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "offset",
        "variableName": "offset"
      }
    ],
    "concreteType": "Record",
    "kind": "LinkedField",
    "name": "records",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "payment_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "order_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "shopify_order_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "created_at",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "Connection",
    "kind": "LinkedField",
    "name": "connections",
    "plural": true,
    "selections": [
      (v1/*: any*/),
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Shop",
        "kind": "LinkedField",
        "name": "shop",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v3/*: any*/)
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
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "Account",
    "kind": "LinkedField",
    "name": "account",
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
          (v2/*: any*/),
          (v1/*: any*/),
          (v3/*: any*/)
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
    "name": "tsAppQuery",
    "selections": (v4/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "tsAppQuery",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "25ce9c8c948a980ae32b5f4eb565fbd0",
    "id": null,
    "metadata": {},
    "name": "tsAppQuery",
    "operationKind": "query",
    "text": "query tsAppQuery(\n  $offset: Int\n) {\n  records(offset: $offset) {\n    payment_id\n    order_id\n    shopify_order_id\n    created_at\n  }\n  connections {\n    id\n    _id\n    shop {\n      id\n      shop\n    }\n    funnel {\n      id\n      name\n    }\n  }\n  account {\n    id\n    shops {\n      _id\n      id\n      shop\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '9af713976b47ac07ed3c7b816f15462f';
export default node;
