'use strict';
const express = require('express');
const app = express();

//Ruta usuarios
app.use('/api/users',require("./user"));


module.exports = app;