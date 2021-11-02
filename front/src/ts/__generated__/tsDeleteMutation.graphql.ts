/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type tsDeleteMutationVariables = {
    id: number;
};
export type tsDeleteMutationResponse = {
    readonly deleteConnection: string | null;
};
export type tsDeleteMutation = {
    readonly response: tsDeleteMutationResponse;
    readonly variables: tsDeleteMutationVariables;
};



/*
mutation tsDeleteMutation(
  $id: Int!
) {
  deleteConnection(id: $id)
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "kind": "ScalarField",
    "name": "deleteConnection",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "tsDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "tsDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a4a31ff8275b89c917f594a17fa8a8b7",
    "id": null,
    "metadata": {},
    "name": "tsDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation tsDeleteMutation(\n  $id: Int!\n) {\n  deleteConnection(id: $id)\n}\n"
  }
};
})();
(node as any).hash = 'de971e2c34408566e66ef50ac83ffb2c';
export default node;
