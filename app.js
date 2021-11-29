const express = require('express')
const app = express()
const routes = require('./src/routes/tiendaRoutes')
const path = require("path");
const info = require('./cardIndex.json');
const dataBaseConnection = require('./config/dataBase')



dataBaseConnection.connect()


app.use(express.json())


app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));



app.use('/home', (req, res)=>{
    res.render('index', {
     dataProductos: info 
    });
})


app.use('/bicicleta', (req, res) =>{
    res.render('./pages/bicicletas')
})


app.listen(3000, ()=>{
    console.log('Server carriendo en puerto 3000')
})

