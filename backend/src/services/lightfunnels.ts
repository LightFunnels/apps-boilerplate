import rp from 'request-promise';

type Opts = {
  data: {
    query: string
    variables?: {[key: string]: any}
  }
  token: string
}

export default function call({token, data}: Opts){
  return rp({
    url: `${process.env.LightfunnelsUrl}graphql`,
    headers: {
      'authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: data,
    json: true
  })
  .then(
    function(response){
      if(response.errors){
        const er = new LfError();
        er.errors = response.errors;
        return Promise.reject(er);
      }
      return response;
    }
  )
}

class LfError extends Error{
  errors: any[]
}