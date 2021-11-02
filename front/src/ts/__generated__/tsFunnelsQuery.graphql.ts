/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type tsFunnelsQueryVariables = {
    first?: number | null | undefined;
    after?: string | null | undefined;
    query: string;
};
export type tsFunnelsQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"tsFunnelsPagination">;
};
export type tsFunnelsQuery = {
    readonly response: tsFunnelsQueryResponse;
    readonly variables: tsFunnelsQueryVariables;
};



/*
query tsFunnelsQuery(
  $first: Int
  $after: String
  $query: String!
) {
  ...tsFunnelsPagination
}

fragment tsFunnelsPagination on Query {
  pagination: funnels(first: $first, after: $after, query: $query) {
    edges {
      node {
        id
        _id
        name
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
    "name": "tsFunnelsQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "tsFunnelsPagination"
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
    "name": "tsFunnelsQuery",
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
    "cacheID": "692adbb2ffb481d3e7a560c88aea33a7",
    "id": null,
    "metadata": {},
    "name": "tsFunnelsQuery",
    "operationKind": "query",
    "text": "query tsFunnelsQuery(\n  $first: Int\n  $after: String\n  $query: String!\n) {\n  ...tsFunnelsPagination\n}\n\nfragment tsFunnelsPagination on Query {\n  pagination: funnels(first: $first, after: $after, query: $query) {\n    edges {\n      node {\n        id\n        _id\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '2f89625996949ffbc41034bbb517eb12';
export default node;
