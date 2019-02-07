const express = require('express')
const router = express.Router()

const books = require('../controllers/books')

router.get('/books', books.getAll)
router.get('/books/:id', books.getOne)
router.post('/books', books.addOne)
router.patch('/books/:id', books.updateOne)
router.patch('/books/cart/add/:id', books.addToCart)
router.patch('/books/cart/remove/:id', books.removeFromCart)
router.delete('/books/:id', books.deleteBook)

module.exports = router
