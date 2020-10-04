import { Request, Response } from 'express';
import { storeUser } from '../services/user';

export async function create( req: Request, res: Response ): Promise<Response<any>> {

	const { username, email, password } = req.body;
    
	await storeUser({ username, email, password });

	return res.status(201).send();
    
}
