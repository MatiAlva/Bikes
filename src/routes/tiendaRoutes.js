const express = require('express')

const routes = express.Router()

const {renderProducts, renderHome} = require('../controllers/tiendaControllers')

routes.get("/", renderHome)

routes.get("/bicicletas", renderProducts)

module.exports = routes