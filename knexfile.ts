import path from 'path';

module.exports = ({
	client: 'sqlite3',
	connection: {
		filename: path.resolve(__dirname, 'src', 'database', 'dbs', 'database_1.sqlite')
	},
	migrations: {
		directory: path.resolve(__dirname, 'src', 'tools', 'migrations')
	},
	useNullAsDefault: true,
});