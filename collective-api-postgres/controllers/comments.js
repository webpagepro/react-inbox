const express = require('express')
const router = express.Router()
const knex = require('../db/knex')

router.get('/comments', (req, res) => {
  knex('comments').then(comments => res.json(comments))
})

router.get('/comments/:id', (req, res) => {
  knex('comments')
    .where('id', req.params.id)
    .then(comment => res.json(comment))
})

router.post('/comments', (req, res) => {
  knex('comments')
    .insert(req.body)
    .returning('*')
    .then(newComment => res.json(newComment))
})

router.put('/comments/:id', (req, res) => {
  knex('comments')
    .where('id', req.params.id)
    .update(req.body)
    .returning('*')
    .then(updatedComment => res.json(updatedComment))
})

router.delete('/comments/:id', (req, res) => {
  knex('comments')
    .where('id', req.params.id)
    .del()
    .returning('*')
    .then(deletedComment => res.json(deletedComment))
})

module.exports = router
