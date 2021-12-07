const dataBaseConnection = require('../../config/dataBase')
const info = require('../../cardIndex.json');
import axios from 'axios'
import { application, urlencoded } from 'express';
 import {PAYPAL_API, API_CLIENT, SECRET_API} from '../config'

const renderHome = (req,res) =>{
    res.render('pages/index', {
        dataProductos: info 
    })
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

const renderContacto = (req,res) => {
    res.render('pages/contacto')
}

const renderNosotros = (req,res) => {
    res.render('pages/SobreNosotros')
}

const crearOrden = async (req, res) => {
    try {
      const order = {
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: "70",
            },
          },
        ],
        application_context: {
          brand_name: "Bikes",
          landing_page: "LOGIN",
          user_action: "PAY_NOW",
          return_url: `http://localhost:3000/capturado`,
          cancel_url: `http://localhost:3000/cancelar`,
        },
      };
  
      const params = new URLSearchParams();
      params.append("grant_type", "client_credentials");
  
      const {
        data: { access_token },
      } = await axios.post(
        "https://api-m.sandbox.paypal.com/v1/oauth2/token",
        params,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          auth: {
            username: API_CLIENT,
            password: SECRET_API,
          },
        }
      );

      const response = await axios.post(
        `${PAYPAL_API}/v2/checkout/orders`,
        order,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
  
      console.log(response.data);
  
      return res.json(response.data);
    } catch (error) {
        return res.status(500).json("Algo fue mal");
    }
  };
  


const capturado = async (req,res) => {

    const {token} = req.query

   const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {}, {
    auth: {
      username: API_CLIENT,
      password: SECRET_API,
    },
   })
    res.send('capturado')
}

const cancelar = (req,res) => {
    res.send('/')
}

module.exports = {
    renderHome,
    renderProducts,
    renderContacto,
    renderNosotros,
    crearOrden,
    capturado,
    cancelar
}