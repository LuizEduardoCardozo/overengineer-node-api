import Knex from 'knex';

export async function up( knex:Knex ): Promise<void> {
	return knex.schema.createTable('users', table => {
		table.increments('id').primary();
		table.string('username').notNullable();
		table.string('email').notNullable().unique();
		table.string('password').notNullable();
		table.integer('role').defaultTo(0);
		table.timestamp('created_at').defaultTo('now()');
	});
}

export async function down( knex:Knex ): Promise<void> {
	return knex.schema.dropTable('users');   
}
