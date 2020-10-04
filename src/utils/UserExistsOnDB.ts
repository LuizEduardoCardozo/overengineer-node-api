import db from '../database';

export async function userExists(email: string): Promise<boolean> {
	const usersFound = await db('users').where('email', email);
	return usersFound.length !== 0;
}