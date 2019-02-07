exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function(table) {
    table.increments()
    table.string('title')
    table.string('subtitle')
    table.string('author')
    table.datetime('published')
    table.string('publisher')
    table.integer('pages')
    table.text('description')
    table.string('website')
    table.boolean('inCart')
    table.integer('price')
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books')
}
