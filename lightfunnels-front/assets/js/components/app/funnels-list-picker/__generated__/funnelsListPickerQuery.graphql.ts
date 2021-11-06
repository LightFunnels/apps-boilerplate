/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type funnelsListPickerQueryVariables = {
    first?: number | null;
    after?: string | null;
    query: string;
};
export type funnelsListPickerQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"funnelsListPickerPagination">;
};
export type funnelsListPickerQuery = {
    readonly response: funnelsListPickerQueryResponse;
    readonly variables: funnelsListPickerQueryVariables;
};



/*
query funnelsListPickerQuery(
  $first: Int
  $after: String
  $query: String!
) {
  ...funnelsListPickerPagination
}

fragment funnelsListPickerPagination on Query {
  pagination: funnels(first: $first, after: $after, query: $query) {
    edges {
      node {
        id
        _id
        name
        slug
        created_at
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "first"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "query"
},
v3 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Variable",
    "name": "query",
    "variableName": "query"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "funnelsListPickerQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "funnelsListPickerPagination"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "funnelsListPickerQuery",
    "selections": [
      {
        "alias": "pagination",
        "args": (v3/*: any*/),
        "concreteType": "FunnelConnection",
        "kind": "LinkedField",
        "name": "funnels",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "FunnelEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Funnel",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "_id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "slug",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "created_at",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": "pagination",
        "args": (v3/*: any*/),
        "filters": [
          "query"
        ],
        "handle": "connection",
        "key": "funnels_pagination",
        "kind": "LinkedHandle",
        "name": "funnels"
      }
    ]
  },
  "params": {
    "cacheID": "b65fa97df342152cb7da50ef7a8ba8a6",
    "id": null,
    "metadata": {},
    "name": "funnelsListPickerQuery",
    "operationKind": "query",
    "text": "query funnelsListPickerQuery(\n  $first: Int\n  $after: String\n  $query: String!\n) {\n  ...funnelsListPickerPagination\n}\n\nfragment funnelsListPickerPagination on Query {\n  pagination: funnels(first: $first, after: $after, query: $query) {\n    edges {\n      node {\n        id\n        _id\n        name\n        slug\n        created_at\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '5fefbfc93c2d347cdf9b5c8bcc72bd4f';
export default node;
