exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', function(table) {
    table.increments()
    table.string('title')
    table.string('year')
    table.string('rated')
    table.string('released')
    table.string('runtime')
    table.string('genre')
    table.string('director')
    table.string('writer'), table.string('actors')
    table.text('plot')
    table.string('language')
    table.string('country')
    table.string('awards')
    table.string('poster')
    table.string('rating')
    table.string('website')
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies')
}

// TODO: Fix the seed data to work
