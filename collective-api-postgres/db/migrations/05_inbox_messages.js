exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', function(table) {
    table.increments()
    table.string('subject')
    table.boolean('read')
    table.boolean('starred')
    table.text('body')
    table.specificType('labels', 'TEXT[]')
    table.boolean('selected').defaultTo(false)
    // TODO: Need to implement labels table
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages')
}
