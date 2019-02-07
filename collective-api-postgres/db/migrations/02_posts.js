exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table) {
    table.increments()
    table.string('author')
    table.text('content')
    table.string('title')
    table.dateTime('createdAt')
    table.integer('votes')
    table.string('img_url')
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts')
}
