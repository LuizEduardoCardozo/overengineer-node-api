import { Request, Response } from 'express';
import { createNewUser, storeUser, userDoLogin } from '../services/user';

export async function create( req: Request, res: Response ): Promise<Response<any>> {

	const { username, email, password } = req.body;
    
	await createNewUser({ username, email, password });

	return res.status(201).send();
    
}


export async function login(req: Request, res: Response): Promise<Response<any>> {
	const { email, password } = req.body;
	const auth = await userDoLogin(email, password);
	return res.json({ auth });
}
