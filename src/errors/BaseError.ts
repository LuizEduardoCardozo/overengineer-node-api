export class BaseError extends Error {

    private statusCode;

    constructor(message: string, statusCode: number) {
    	super(message);
    	this.statusCode = statusCode;
    }

    getBody = () => ({
    	message: this.message
    })

    getStatusCode = () => this.statusCode;

}