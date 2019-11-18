const express = require('express')

const routes = express.Router()

const bandasController = require('./Controllers/bandasController')

routes.post('/register', bandasController.store)
routes.post('/bandas', bandasController.index)

module.exports = routes
