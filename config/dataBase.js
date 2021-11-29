const mysql = require('mysql2')

const dataBaseConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'tiendabicicletas',
})

dataBaseConnection.connect((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("Conexion exitosa")
    }
})

module.exports = dataBaseConnection