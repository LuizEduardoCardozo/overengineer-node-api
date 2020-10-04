import db from '../database';

export async function userExists(email: string): Promise<boolean> {
	const user = await db('users').where('email', email);
	return !(!(user));
}