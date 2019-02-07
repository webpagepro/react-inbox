exports.up = function(knex, Promise) {
  return knex.schema.createTable('cameras', function(table) {
    table.increments()
    table.string('name')
    table.float('price')
    table.string('picture')
    table.integer('rating')
    table.boolean('inCart')
    table.boolean('onSale')
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cameras')
}
