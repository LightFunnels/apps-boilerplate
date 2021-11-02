import React from 'react';

import {
  RelayEnvironmentProvider
} from 'react-relay';

import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

import {
  MutationErrors,
  SetMutationErrors,
} from '../../../lightfunnels-front/assets/js/data';

export const store = new Store(new RecordSource());

type HttpError = {
  message: string
  key: string
  path: string[]
  name: string
}

export function Relay(props: {token: string, children: React.ReactNode}){

  const [mutationErrors, setMutationErrors] = React.useState<HttpError[]>([]);

  const environment = React.useMemo(
    function(){
      return new Environment({
        network: Network.create(
          function (operation, variables) {
            return (
              fetch(
                process.env.ApiURL + 'api',
                {
                  method: 'post',
                  body: JSON.stringify({
                    query: operation.text,
                    variables
                  }),
                  headers: {
                    'authorization': 'bearer ' + props.token,
                    'Content-Type': 'application/json; charset=UTF-8'
                  }
                },
              )
              .then(resp => resp.json())
              .then(
                response => {
                  if(response.errors){
                    const er: any = new Error('ServerError');
                    er.data = response.data;
                    er.errors = response.errors;
                    if(operation.operationKind === "mutation"){
                      setMutationErrors(response.errors ?? []);
                    }
                    return Promise.reject(er);
                  }
                  return response;
                }
              )
            );
          }
        ),
        store
      });
    },
    []
  );

  return(
    <RelayEnvironmentProvider environment={environment} >
      <MutationErrors.Provider value={mutationErrors}>
        <SetMutationErrors.Provider value={setMutationErrors}>
          {props.children}
        </SetMutationErrors.Provider>
      </MutationErrors.Provider>
    </RelayEnvironmentProvider>
  );
}