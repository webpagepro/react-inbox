exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', function(table) {
    table.increments()
    table
      .integer('product_id')
      .references('id')
      .inTable('products')
      .onDelete('cascade')
    table.integer('quantity')
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('items')
}
