const express = require('express')
const router = express.Router()
const knex = require('../db/knex')

router.get('/products', (req, res) => {
  knex('products').then(products => res.json(products))
})

router.get('/products/:id', (req, res) => {
  knex('products')
    .where('id', req.params.id)
    .then(product => res.json(product))
})

router.post('/products', (req, res) => {
  knex('products')
    .insert(req.body)
    .returning('*')
    .then(newProduct => res.json(newProduct))
})

router.put('/products/:id', (req, res) => {
  knex('products')
    .where('id', req.params.id)
    .update(req.body)
    .returning('*')
    .then(updatedProduct => res.json(updatedProduct))
})

router.delete('/products/:id', (req, res) => {
  knex('products')
    .where('id', req.params.id)
    .del()
    .returning('*')
    .then(deletedProduct => res.json(deletedProduct))
})

module.exports = router
