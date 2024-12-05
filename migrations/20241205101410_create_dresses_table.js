/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('dresses', (table) => {
        table.increments('id').primary(); 
        table.string('name').notNullable(); 
        table.float('cost').notNullable(); 
        table.string('imagePath').notNullable(); 
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('dresses');
  
};
