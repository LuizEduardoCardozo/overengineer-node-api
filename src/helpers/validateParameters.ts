import { InvalidParameterError } from '../errors/InvalidParameterError';

export default function validateParemeters(parameters: Array<string>, source: any): void {
	parameters.forEach(parameter => {
		if(!source[parameter]) throw new InvalidParameterError(parameter);
	});
}
