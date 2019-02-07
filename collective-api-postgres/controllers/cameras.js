const express = require('express')
const router = express.Router()
const knex = require('../db/knex')

router.get('/cameras', (req, res) => {
  knex('cameras').then(cameras => res.json(cameras))
})

router.get('/cameras/:id', (req, res) => {
  knex('cameras')
    .where('id', req.params.id)
    .then(camera => res.json(camera))
})

router.post('/cameras', (req, res) => {
  knex('cameras')
    .insert(req.body)
    .returning('*')
    .then(newCamera => res.json(newCamera))
})

router.put('/cameras/:id', (req, res) => {
  knex('cameras')
    .where('id', req.params.id)
    .update(req.body)
    .returning('*')
    .then(updatedCamera => res.json(updatedCamera))
})

router.delete('/cameras/:id', (req, res) => {
  knex('cameras')
    .where('id', req.params.id)
    .del()
    .returning('*')
    .then(deletedcCamera => res.json(deletedCamera))
})

module.exports = router
