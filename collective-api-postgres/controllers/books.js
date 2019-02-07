const knex = require('../db/knex')

module.exports = {
  getAll(req, res) {
    knex('books')
      .orderBy('id', 'asc')
      .then(books => res.json(books))
  },
  getOne(req, res) {
    knex('books')
      .where('id', req.params.id)
      .then(book => res.json(book))
  },
  addOne(req, res) {
    knex('books')
      .insert(req.body)
      .returning('*')
      .then(newBook => res.json(newBook))
  },
  updateOne(req, res) {
    knex('books')
      .where('id', req.params.id)
      .update(req.body)
      .returning('*')
      .then(updatedBook => res.json(updatedBook))
  },
  addToCart(req, res) {
    knex('books')
      .where('id', req.params.id)
      .update({
        inCart: true
      })
      .returning('*')
      .then(updatedBook => res.json(updatedBook))
  },
  removeFromCart(req, res) {
    knex('books')
      .where('id', req.params.id)
      .update({
        inCart: false
      })
      .returning('*')
      .then(updatedBook => res.json(updatedBook))
  },
  deleteBook(req, res) {
    knex('books')
      .where('id', req.params.id)
      .del()
      .returning('*')
      .then(deletedBook => res.json(deletedBook))
  }
}
