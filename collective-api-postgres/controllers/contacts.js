const express = require('express')
const router = express.Router()
const knex = require('../db/knex')

router.get('/contacts', (req, res) => {
  knex('contacts').then(contacts => res.json(contacts))
})

router.get('/contacts/:id', (req, res) => {
  knex('contacts')
    .where('id', req.params.id)
    .then(contact => res.json(contact))
})

router.post('/contacts', (req, res) => {
  knex('contacts')
    .insert(req.body)
    .returning('*')
    .then(newContact => res.json(newContact))
})

router.put('/contacts/:id', (req, res) => {
  knex('contacts')
    .where('id', req.params.id)
    .update(req.body)
    .returning('*')
    .then(updatedContact => res.json(updatedContact))
})

router.delete('/contacts/:id', (req, res) => {
  knex('contacts')
    .where('id', req.params.id)
    .del()
    .returning('*')
    .then(deletedContact => res.json(deletedContact))
})

module.exports = router
