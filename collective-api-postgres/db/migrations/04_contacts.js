exports.up = function(knex, Promise) {
  return knex.schema.createTable('contacts', function(table) {
    table.increments()
    table.string('name')
    table.string('phone')
    table.string('email')
    table.string('company')
    table.string('address')
    table.string('photo_url')
    table.string('password')
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contacts')
}
