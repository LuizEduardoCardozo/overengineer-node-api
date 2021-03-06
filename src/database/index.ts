import knex from 'knex';
import path from 'path';

const db = knex({
	client: 'sqlite3',
	connection: {
		filename:  path.resolve(__dirname, 'dbs', 'database_1.sqlite')
	},
	useNullAsDefault: true,
});

export default db;
