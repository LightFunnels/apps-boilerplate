import {nodeDefinitions, fromGlobalId} from 'graphql-relay';

const { nodeInterface, nodeField } = nodeDefinitions(
  async function (globalId, context: ApiContext) {
    const { type, id } = fromGlobalId(globalId);
    switch (type) {
      default:{
        throw new Error('invalid type:' + type)
      }
    }
    return ;
  },
  (obj) => {
    switch(obj.__type){
      default:{
        throw new Error('missing type:');
      }
    }
  },
);

exports.Node = nodeInterface;