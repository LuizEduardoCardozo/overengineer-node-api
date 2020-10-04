import { BaseError } from './BaseError';

export class InvalidParameterError extends BaseError {
	constructor(parameter: string) {
		super(`Invalid parameter: ${parameter}`, 403);
	}
}
