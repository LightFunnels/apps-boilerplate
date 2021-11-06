import React from "react";
import lodash from "lodash";

export { Button } from './button';

export * from './form-group';
export * from './input';
export * from './select';
export * from './error-view';

export function useRelayErrors(){
	const [errors, setErrors] = React.useState<HttpError[]>([]);
	const _errs =  React.useMemo(
		function () {
			// let paths = lodash.castArray(e);
			return (
				errors.reduce(
					function (ac, error) {
						let pt = error.path.slice(1).toString();
						ac[ pt ] = error.message;
						return ac;
					},
					{} as {[key: string]: string}
				)
			)
		},
		[errors]
	);
	function onError(err: any){
		setErrors(err.errors || []);
	}
	return [
		onError,
		_errs,
		setErrors,
		errors
	] as const;
}

export function useDebounce(func, duration = 300, returnInterval = false) {

	var i = React.useRef<any>();

	function fire(...args) {

		clearTimeout(i.current)

		i.current = setTimeout(
			func,
			duration,
			...args
		);

	}

	if(returnInterval){
		return [fire, i];
	}

	return fire;
}
