const express = require('express')
const router = express.Router()
const knex = require('../db/knex')

router.get('/items', (req, res) => {
  knex('items').then(items => res.json(items))
})

router.get('/items/:id', (req, res) => {
  knex('items')
    .where('id', req.params.id)
    .then(item => res.json(item))
})

router.post('/items', (req, res) => {
  knex('items')
    .insert(req.body)
    .returning('*')
    .then(newItem => res.json(newItem))
})

router.put('/items/:id', (req, res) => {
  knex('items')
    .where('id', req.params.id)
    .update(req.body)
    .returning('*')
    .then(updatedItem => res.json(updatedItem))
})

router.delete('/items/:id', (req, res) => {
  knex('items')
    .where('id', req.params.id)
    .del()
    .returning('*')
    .then(deletedItem => res.json(deletedItem))
})

module.exports = router
