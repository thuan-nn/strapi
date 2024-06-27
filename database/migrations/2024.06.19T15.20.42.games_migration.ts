import { Knex } from 'knex';

/**
 * Migration `gifts_migration`
 */

export default {
  up: async (knex: Knex) => {
    await knex.schema.createTable('gifts', (table) => {
      table.increments('id', {
        primaryKey: true,
      });
      table.string('name');
      table.integer('quantity').defaultTo(0);
      table.integer('given').defaultTo(0);
      table.float('win_rate').defaultTo(0);
      table.string('type').nullable();
      table.integer('order').defaultTo(0);
    });

    await knex.schema.createTable('players', (table) => {
      table.increments('id', {
        primaryKey: true,
      });
      table.string('name');
      table.string('phone');
      table.string('spin');
    });

    await knex.schema.createTable('lotteries', (table) => {
      table.increments('id', {
        primaryKey: true,
      });
      table.integer('gift_id');
      table.integer('player_id');
      table.boolean('is_win').defaultTo(false);
    });
  },
};
