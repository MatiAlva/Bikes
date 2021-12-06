import express from 'express'
 const app = express()
 const routes = require('./routes/tiendaRoutes')
 const path = require("path");
 import {Puerto} from './config'

 const dataBaseConnection = require('../config/dataBase')


 dataBaseConnection.connect()


 app.use(express.json())


 app.set('views',path.join(__dirname,'views'));
 app.set('view engine','ejs');
 app.use(express.static(path.join(__dirname,'public')));


 app.use("", routes)



app.listen(Puerto, ()=>{
    console.log('Server carriendo en puerto', Puerto)
})

