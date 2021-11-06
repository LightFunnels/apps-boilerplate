import React from 'react'
import {setIn} from 'immutable';
import lodash from 'lodash'
import DataLoader from 'dataloader';

export const Loaders = React.createContext<ReturnType<typeof setupLoaders>>(null as any);
export const MutationErrors = React.createContext<HttpError[]>(undefined as any);
export const SetMutationErrors = React.createContext((a: HttpError[]) => alert('not implemented'));

function mapEventToKeyValue(event, _value) {

	if(Array.isArray(event) || (typeof event === 'string')){
		return [lodash.castArray(event), _value];
	}

	let rt = [event.target.name.split(',')];

	if(event.target.type === "checkbox"){
		rt.push(event.target.checked);
	} else if (event.target.type === "number"){
		let value = parseFloat(event.target.value);
		rt.push(
			isNaN(value) ? null : value
			// isNaN(event.target.value) ? null : parseFloat(event.target.value)
			// (event.target.value === "" || isNaN(event.target.value)) ? 0 : parseFloat(event.target.value)
		);
	} else {
		rt.push(event.target.value);
	}

	return rt;
}

export function useLocalStore<Type>(
	initialData: Type | (() => Type),
	watch: any[] = [],
	reducer?: (a: Type, b: Type) => Type
): [Type, (a, b?) => void] {
	
	// this component was updated recently
	// it may break tings, if you notice anything; let's discuss it

	const [state, dispatch] = React.useReducer(
		function (state, ac) {
			let prevState = state;
			switch(ac.type){
				case 'setIn':{
					let {name, value} = ac;
					state = setIn(state, name, value );
					break;
				}
				case 'reset':{
					state = initialData;
					break;
				};
				case 'func':{
					state = ac.func(state);
					break;
				}
			}
			if(reducer){
				state = reducer(state, prevState);
			}
			return state;
		},
		initialData,
		(state) => {
			if(lodash.isFunction(state)){
				return state();
			}
			return state;
		}
	);

	const ref = React.useRef(false);

	React.useEffect(
		function () {
			if(!ref.current){
				ref.current = true;
				return;
			}
			dispatch({type: 'reset'});
		},
		watch
	);

	function onChange(...params: [any, any?]) {
		if(typeof params[0] === "function"){
			dispatch({
				type: 'func',
				func: params[0]
			});
		} else {
			let [name, value] = mapEventToKeyValue(...params);
			dispatch({
				type: 'setIn',
				name, value
			});
		}
	}

	return [state, onChange]
}

function setupLoaders(query){
	return {
		Funnel: DataLoader
	}
}
