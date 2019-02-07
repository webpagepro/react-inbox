const express = require('express')
const router = express.Router()
const knex = require('../db/knex')

router.get('/posts', (req, res) => {
  knex('posts').then(posts => res.json(posts))
})

router.get('/posts/:id', (req, res) => {
  knex('posts')
    .where('id', req.params.id)
    .then(post => res.json(post))
})

router.post('/posts', (req, res) => {
  knex('posts')
    .insert(req.body)
    .returning('*')
    .then(newPost => res.json(newPost))
})

router.put('/posts/:id', (req, res) => {
  knex('posts')
    .where('id', req.params.id)
    .update(req.body)
    .returning('*')
    .then(updatedPost => res.json(updatedPost))
})

router.delete('/posts/:id', (req, res) => {
  knex('posts')
    .where('id', req.params.id)
    .del()
    .returning('*')
    .then(deletedPost => res.json(deletedPost))
})

module.exports = router
