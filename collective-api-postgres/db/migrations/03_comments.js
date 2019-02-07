exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(table) {
    table.increments()
    table.text('content')
    table
      .integer('post_id')
      .references('id')
      .inTable('posts')
      .onDelete('cascade')
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments')
}
