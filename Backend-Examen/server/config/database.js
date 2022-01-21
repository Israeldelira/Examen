'use stric'
const mysql = require("mysql2")
const {HOST,PASSWORD_DB,PORT,USER_DB,DATABASE} = require('./config')


//Creamos la conexion con los parametros correspondientes
const  conectionDB= mysql.createPool({
    host: HOST,
    user: USER_DB,
    password: PASSWORD_DB,
    database:DATABASE,
    connectionLimit:5
  });

  
//   const conectionDB = new mysql.ConnectionPool(pool)

//   const conectionDB =( sql, values ) => {
//         // devolver una promesa
//      return new Promise(( resolve, reject ) => {
//        pool.conectionDB(function(err, connection) {
//          if (err) {
//            reject( err )
//          } else {
//            connection.query(sql, values, ( err, rows) => {
    
//              if ( err ) {
//                reject( err )
//              } else {
//                resolve( rows )
//              }
//                         // finaliza la sesión
//              connection.release()
//            })
//          }
//        })
//      })
//    }
module.exports = {
    conectionDB,
}