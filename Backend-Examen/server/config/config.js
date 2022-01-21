'use strict';

require("dotenv").config();

module.exports={
    PORT:process.env.PORT || 3000, //Exportamos el puerto de nuestro .env
    HOST:process.env.HOST,
    PASSWORD_DB:process.env.PASSWORD_DB,
    USER_DB:process.env.USER_DB,
    DATABASE:process.env.DB_NAME

};
