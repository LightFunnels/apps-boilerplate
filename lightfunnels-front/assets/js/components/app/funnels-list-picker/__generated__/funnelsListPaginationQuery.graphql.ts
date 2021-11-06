/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type funnelsListPaginationQueryVariables = {
    after?: string | null;
    first?: number | null;
    query: string;
};
export type funnelsListPaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"funnelsListPickerPagination">;
};
export type funnelsListPaginationQuery = {
    readonly response: funnelsListPaginationQueryResponse;
    readonly variables: funnelsListPaginationQueryVariables;
};



/*
query funnelsListPaginationQuery(
  $after: String
  $first: Int
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
    "name": "funnelsListPaginationQuery",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "funnelsListPaginationQuery",
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
    "cacheID": "98e9b3183dcac0ecbf8b9bd495561cf4",
    "id": null,
    "metadata": {},
    "name": "funnelsListPaginationQuery",
    "operationKind": "query",
    "text": "query funnelsListPaginationQuery(\n  $after: String\n  $first: Int\n  $query: String!\n) {\n  ...funnelsListPickerPagination\n}\n\nfragment funnelsListPickerPagination on Query {\n  pagination: funnels(first: $first, after: $after, query: $query) {\n    edges {\n      node {\n        id\n        _id\n        name\n        slug\n        created_at\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '7fe224f10f2fc5debc8d7983b1bb7103';
export default node;
