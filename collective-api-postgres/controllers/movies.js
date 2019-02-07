const express = require('express')
const router = express.Router()
const knex = require('../db/knex')

router.get('/movies', (req, res) => {
  knex('movies').then(movies => res.json(movies))
})

router.get('/movies/:id', (req, res) => {
  knex('movies')
    .where('id', req.params.id)
    .then(movie => res.json(movie))
})

router.post('/movies', (req, res) => {
  knex('movies')
    .insert(req.body)
    .returning('*')
    .then(newMovie => res.json(newMovie))
})

router.put('/movies/:id', (req, res) => {
  knex('movies')
    .where('id', req.params.id)
    .update(req.body)
    .returning('*')
    .then(updatedMovie => res.json(updatedMovie))
})

router.delete('/movies/:id', (req, res) => {
  knex('movies')
    .where('id', req.params.id)
    .del()
    .returning('*')
    .then(deletedMovie => res.json(deletedMovie))
})

module.exports = router
