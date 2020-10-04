import { Request, Response } from 'express';
import { createNewUser, storeUser } from '../services/user';

export async function create( req: Request, res: Response ): Promise<Response<any>> {

	const { username, email, password } = req.body;
    
	await createNewUser({ username, email, password });

	return res.status(201).send();
    
}
