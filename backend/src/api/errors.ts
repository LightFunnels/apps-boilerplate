import translation from '../services/translation';
import log from '../services/log'

export class SimpleError extends Error {
	pt: (string|number)[]
	key: string
	constructor(key: keyof typeof translation, path: (string|number)[] = []){
		super(translation[key]);
		this.message = translation[key];
		this.pt = path;
		this.key = key;
	}
}

export function reduceError(errors: any[], error) {
	let message = error.message;
	let path = error.path;
	if(error.originalError !== undefined){
		if(error.originalError instanceof SimpleError){
			let _err = error.originalError as SimpleError;
			errors.push({
				key: _err.key,
				path: _err.pt.concat(path),
				message: _err.message,
			});
		} else if (error.originalError.name === "ValidationError"){
			errors = errors.concat(
				error.originalError.details.map(
					function (e) {
						return {
							key: "ValidationError",
							path: error.path.concat(e.path),
							message: e.message,
						}
					}
				)
			);
		} else {
			// log error here
			log({
				cause: 'API',
				error: error.originalError,
				message: error.originalError.message,
				stack: error.originalError.stack,
				name: error.originalError.name,
			});
			errors.push({
				message: translation.unknown,
				path: error.path,
			});
		}
	} else {
		errors.push({
			message: error.message,
			path
		});
	}
	return errors;
}

