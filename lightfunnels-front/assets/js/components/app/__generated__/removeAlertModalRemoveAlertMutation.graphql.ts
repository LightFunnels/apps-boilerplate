/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type AlertType = "ACCOUNT_SETUP" | "ADD_PAYMENT_METHOD" | "FIRST_SELL" | "FUNNEL_BUILDER_TOUR" | "PAGE_BUILDER_TOUR" | "THREE_D_SECURE" | "%future added value";
export type removeAlertModalRemoveAlertMutationVariables = {
    type: AlertType;
};
export type removeAlertModalRemoveAlertMutationResponse = {
    readonly removeAlert: {
        readonly id: string;
        readonly alerts: ReadonlyArray<{
            readonly id: string;
            readonly type: AlertType;
        }>;
    };
};
export type removeAlertModalRemoveAlertMutation = {
    readonly response: removeAlertModalRemoveAlertMutationResponse;
    readonly variables: removeAlertModalRemoveAlertMutationVariables;
};



/*
mutation removeAlertModalRemoveAlertMutation(
  $type: AlertType!
) {
  removeAlert(type: $type) {
    id
    alerts {
      id
      type
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "type"
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
        "name": "type",
        "variableName": "type"
      }
    ],
    "concreteType": "Account",
    "kind": "LinkedField",
    "name": "removeAlert",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Alert",
        "kind": "LinkedField",
        "name": "alerts",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "type",
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
    "name": "removeAlertModalRemoveAlertMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "removeAlertModalRemoveAlertMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "fd4538d3fc9c1a536878d90db013a0f3",
    "id": null,
    "metadata": {},
    "name": "removeAlertModalRemoveAlertMutation",
    "operationKind": "mutation",
    "text": "mutation removeAlertModalRemoveAlertMutation(\n  $type: AlertType!\n) {\n  removeAlert(type: $type) {\n    id\n    alerts {\n      id\n      type\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '5bd5c054d6af96dcc9d95b4bd967eb4a';
export default node;
