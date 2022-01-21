
const {conectionDB}= require("../config/database");

//Extraer todos los usuarios con promesa
const  getAll = () => {
    return new Promise((resolve, reject)=>{
        let queryGetUsers="SELECT * FROM USERS"
        conectionDB.query(queryGetUsers,  (error, results)=>{
            if(error){
                return reject(error);
            }
            return resolve(results);
        });
    });
};

//Buscar usuarios con promesa
const  searchUser = (type,regex) => {

    return new Promise((resolve, reject)=>{
console.log("si entra aqui"+type+"-----"+regex)
       let query=''
       let data = `%${regex}%`;
       console.log(data)
      
       //If para validar si es busqueda por nombre,apellido paterno,apellido materno
        if(type==='apellidoM'){
        query='SELECT * FROM USERS WHERE apellido_materno LIKE ?'
        }
        else if(type==='apellidoP'){
            query='SELECT * FROM USERS WHERE apellido_paterno LIKE ?'
        }
        else if(type==='nombres'){
            query='SELECT * FROM USERS WHERE nombres LIKE ?'
        }
        conectionDB.query(query,data,  (error, results)=>{
            if(error){
                return reject(error);
            }
            return resolve(results);
        });
    });
};

//Creamos el usuario
const  createUser = (newUser) => {
    return new Promise((resolve, reject)=>{
        let queryCreateUser='INSERT INTO USERS SET ?'
        conectionDB.query(queryCreateUser, newUser, (error, results)=>{
            if(error){
                return reject(error);
            }
            return resolve(results);
        });
    });
};

//Editamos usaurio
const  editUser = (id,user) => {
    return new Promise((resolve, reject)=>{
        let queryEditUser='UPDATE USERS SET ? WHERE id_user = ?'
        conectionDB.query(queryEditUser,[user, id ],(error, results)=>{
            if(error){
                return reject(error);
            }
            return resolve(results);
        });
    });
};

//Extraemos por id
const  getUserById = (id) => {
    return new Promise((resolve, reject)=>{
        let queryEditUser='SELECT * FROM USERS WHERE id_user = ?'
        conectionDB.query(queryEditUser, id ,(error, results)=>{
            if(error){
                return reject(error);
            }
            return resolve(results);
        });
    });
};


//Eliminamos mediante id
const  deleteUser = (id) => {
    return new Promise((resolve, reject)=>{
        let queryDeleteUser='DELETE FROM USERS WHERE id_user = ?'
        conectionDB.query(queryDeleteUser,id, (error, results)=>{
            if(error){
                return reject(error);
            }
            return resolve(results);
        });
    });
};


module.exports = {
    getAll,
    createUser,
    editUser,
    deleteUser,
    getUserById,
    searchUser
};
