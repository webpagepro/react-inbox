const express = require('express')
const router = express.Router()
const knex = require('../db/knex')

router.get('/messages', (req, res) => {
  knex('messages').then(messages => res.json(messages))
})

router.get('/messages/:id', (req, res) => {
  knex('messages')
    .where('id', req.params.id)
    .then(message => res.json(message))
})

router.post('/messages', (req, res) => {
  knex('messages')
    .insert(req.body)
    .returning('*')
    .then(newMessage => res.json(newMessage))
})

router.patch('/messages/:id', (req, res) => {
  knex('messages')
    .where('id', req.params.id)
    .update(req.body)
    .returning('*')
    .then(updatedMessage => res.json(updatedMessage))
})

router.delete('/messages/:id', (req, res) => {
  knex('messages')
    .where('id', req.params.id)
    .del()
    .returning('*')
    .then(deletedMessage => res.json(deletedMessage))
})

module.exports = router
