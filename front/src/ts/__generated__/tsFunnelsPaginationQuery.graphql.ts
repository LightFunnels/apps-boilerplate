/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type tsFunnelsPaginationQueryVariables = {
    after?: string | null | undefined;
    first?: number | null | undefined;
    query: string;
};
export type tsFunnelsPaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"tsFunnelsPagination">;
};
export type tsFunnelsPaginationQuery = {
    readonly response: tsFunnelsPaginationQueryResponse;
    readonly variables: tsFunnelsPaginationQueryVariables;
};



/*
query tsFunnelsPaginationQuery(
  $after: String
  $first: Int
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
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "query"
  }
],
v1 = [
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "tsFunnelsPaginationQuery",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "tsFunnelsPaginationQuery",
    "selections": [
      {
        "alias": "pagination",
        "args": (v1/*: any*/),
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
        "args": (v1/*: any*/),
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
    "cacheID": "6e9cdf1c9a3d25b47eb894bd8c652a6f",
    "id": null,
    "metadata": {},
    "name": "tsFunnelsPaginationQuery",
    "operationKind": "query",
    "text": "query tsFunnelsPaginationQuery(\n  $after: String\n  $first: Int\n  $query: String!\n) {\n  ...tsFunnelsPagination\n}\n\nfragment tsFunnelsPagination on Query {\n  pagination: funnels(first: $first, after: $after, query: $query) {\n    edges {\n      node {\n        id\n        _id\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '194be79f013cfd709713303f4765dbca';
export default node;
