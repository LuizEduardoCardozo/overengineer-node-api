import db from '../database';
import UserInterface from '../models/UserInterface';
import { getSha256 } from '../utils/sha256';
import { userExists } from '../utils/UserExistsOnDB';


export async function createNewUser(userParams: UserInterface): Promise<number> {
	const { username, email, password } = userParams;
	console.log(await userExists(email));
	if(await userExists(email)) throw Error('User already registred');
	const insertedUserId = await storeUser({username, email, password: getSha256(password)});
	console.log(`User with id ${insertedUserId} inserted on db with success!`);
	return insertedUserId;
}


export async function storeUser(params: UserInterface): Promise<number> {
	const storedUsersIds = await db('users').insert(params);  
	const storedUserId = storedUsersIds[0];
	return storedUserId;
}
