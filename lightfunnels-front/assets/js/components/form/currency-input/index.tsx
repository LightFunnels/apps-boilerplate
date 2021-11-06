import React from 'react';

import {
  InputComponent,
  } from '../..';

import Ci from 'react-currency-input-field';

export function CurrencyInputComponent(props) {
  return (
    <InputComponent
      {...props}
      type={'currency'}
    />
  );
}

export function RawCurrencyInputComponent(props) {
  
  let [v, setv] = React.useState(props.value);

  function onChangeE(v) {
    // this must throw error
    // if(props.onChange){
      props.onChange({
        target:{
          value: v,
          name: props.name && props.name.toString()
        }
      })
    // }
  }

  React.useEffect(
    function () {
      if(![undefined, null].includes(props.value)){
        let pfv = parseFloat(v);
        if(props.value !== pfv){
          setv(props.value);
        }
      }
      // else if (v){
      //   setv('');
      // }
    },
    [props.value]
  );

  return (
    <Ci
      {...props}
      value={v}
      onChange={
        nv => {
          // console.log('change np');
          setv(nv);
          if(nv){
            let pfv = parseFloat(nv);
            if(
              (pfv !== props.value) && 
              !isNaN(pfv)
            ) {
              onChangeE(pfv);
            }
          } else {
            onChangeE(null);
          }
        }
      }
    />
  );
}