const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 8000
const cors = require('cors')
const logger = require('morgan')
const knex = require('./db/knex')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', require('./routes/indexRoutes'))
app.use('/', require('./config/routes'))

app.use('/', require('./controllers/cameras'))
app.use('/', require('./controllers/posts'))
app.use('/', require('./controllers/comments'))
app.use('/', require('./controllers/messages'))
app.use('/', require('./controllers/movies'))
app.use('/', require('./controllers/contacts'))
app.use('/', require('./controllers/sc-products'))
app.use('/', require('./controllers/sc-items'))

app.listen(port, function() {
  console.log('listening on port: ', port)
})
