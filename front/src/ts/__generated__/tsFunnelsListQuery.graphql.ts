/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type tsFunnelsListQueryVariables = {
    ids: Array<number>;
};
export type tsFunnelsListQueryResponse = {
    readonly funnelsList: ReadonlyArray<{
        readonly _id: number;
        readonly id: string;
        readonly name: string;
    } | null>;
};
export type tsFunnelsListQuery = {
    readonly response: tsFunnelsListQueryResponse;
    readonly variables: tsFunnelsListQueryVariables;
};



/*
query tsFunnelsListQuery(
  $ids: [Int!]!
) {
  funnelsList(ids: $ids) {
    _id
    id
    name
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "ids"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "ids",
        "variableName": "ids"
      }
    ],
    "concreteType": "Funnel",
    "kind": "LinkedField",
    "name": "funnelsList",
    "plural": true,
    "selections": [
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
        "name": "id",
        "storageKey": null
      },
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "tsFunnelsListQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "tsFunnelsListQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7e2cf67fdd8cc7bd18ad7173da385ff4",
    "id": null,
    "metadata": {},
    "name": "tsFunnelsListQuery",
    "operationKind": "query",
    "text": "query tsFunnelsListQuery(\n  $ids: [Int!]!\n) {\n  funnelsList(ids: $ids) {\n    _id\n    id\n    name\n  }\n}\n"
  }
};
})();
(node as any).hash = 'fc1365f619d74b6938d068a2cfe65e48';
export default node;
