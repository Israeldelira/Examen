'use strict';

require("dotenv").config(); //Manipular variables de entorno
const express = require("express");
const cors = require('cors')
const { PORT } = require("./config/config");

//Servidor
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//Configuracion del CORS
app.use(cors())
app.use(express.json());

//Implementar todas las rutas en nuestro servidor mediate un solo archivo
app.use(require("./routes/index"));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });