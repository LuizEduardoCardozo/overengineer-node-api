import { Request, Response } from 'express';
import { BaseError } from '../errors/BaseError';
import { createNewUser, userDoLogin } from '../services/user';

export async function create( req: Request, res: Response ): Promise<Response<any>> {

	const { username, email, password } = req.body;
	
	try {
		
		const response = await createNewUser({ username, email, password });
		
		if(response instanceof BaseError) {
			return res.status(response.getStatusCode()).json({error: response.getBody()});		
		}

	} catch (err) {
		console.log('error', err);
	}

	return res.status(201).send();
    
}


export async function login(req: Request, res: Response): Promise<Response<any>> {
	try {
		const { email, password } = req.body;
		const auth = await userDoLogin({ email, password });
		return res.json({ auth });
	} catch (error) {
		throw Error('Unknown error');
	}
	
}
