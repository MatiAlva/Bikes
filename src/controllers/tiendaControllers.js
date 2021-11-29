const dataBaseConnection = require('../../config/dataBase')



const renderHome = (req,res) =>{
    res.render('pages/index')
}


const renderProducts = (req,res) =>{
    dataBaseConnection.query('SELECT * FROM productos',(error,data) =>{
        if(error){
            console.log(error)
        }else{  
            res.render('pages/bicicletas', {
                data
            })
        }
    })
}

module.exports = {
    renderHome,
    renderProducts
}