interface LogErrorObject {
  [x: string]: any,
  // message: string
  // stack: string
  // name: string
  cause: 'API' | 'WEBHOOKS'
}

export default function log(obj: LogErrorObject, ...args){

	console.log(
	  json(obj),
	  ...args.map(json)
	);

}

function json(obj) {
  return (process.env.NodeEnv !== 'production') ?
    JSON.stringify(obj, null, 2) :
    JSON.stringify(obj);
}