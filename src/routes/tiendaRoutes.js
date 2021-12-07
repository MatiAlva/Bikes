const express = require('express')

const routes = express.Router()

const {renderProducts, renderHome, renderContacto, renderNosotros, crearOrden, capturado, cancelar } = require('../controllers/tiendaControllers')

routes.get("/", renderHome)

routes.get("/Bicicletas", renderProducts)

routes.get("/Contacto",renderContacto)

routes.get("/Nosotros",renderNosotros)

routes.post("/Orden-Creada",crearOrden)

routes.get("/Capturado",capturado)

routes.get("/Cancelar",cancelar)


module.exports = routes