import knex from 'knex';
import path from 'path';

const db = knex({
	client: 'sqlite3',
	connection: {
		filename: path.join('database_1.sqlite3')
	},
	useNullAsDefault: true,
});

export default db;
