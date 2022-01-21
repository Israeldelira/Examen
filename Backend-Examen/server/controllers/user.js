
const { getAll, createUser, deleteUser, editUser, getUserById, searchUser } = require('../models/user');
const { conectionDB } = require('../config/database')



const getUsers = async (req, res) => {
    try {
        const users = await getAll()
        if (users) {
            res.status(200).json({
                users
            })
        }
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Ocurrio un error con la base de datos",
            error: error

        })
    }

}
const ctrSearchUsers = async (req, res) => {
    const regex = req.params.termino;

    const type = req.params.type;
    try {
        const users = await searchUser(type, regex)
        if (users) {
            res.status(200).json({
                users
            })
        }
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Ocurrio un error con la base de datos",
            error: error

        })
    }

}
const ctrCreateUser = async (req, res) => {
    const newUser = {
        nombres: req.body.nombres,
        apellido_paterno: req.body.apellido_paterno,
        apellido_materno: req.body.apellido_materno,
        direccion: req.body.direccion,
        telefono: req.body.telefono
    }

    try {

        const resultUser = await createUser(newUser)
        //Resultado OK
        if (resultUser) {
            res.status(200).json({
                ok: true,
                msg: "Usuario creado con exito",
                resultUser
            });
        }


        //Manejo de errores 
    } catch (err) {
        res.status(500).json({
            ok: false,
            msg: 'Ocurrio un problema con el servidor',
            error: err
        });
        console.log(err);
    }
}
const ctrEditUser = async (req, res) => {
    const id_user = req.params.id

    //Guardamos datos del req.body en un arreglo
    const dataUser = {
        nombres: req.body.nombres,
        apellido_paterno: req.body.apellido_paterno,
        apellido_materno: req.body.apellido_materno,
        direccion: req.body.direccion,
        telefono: req.body.telefono
    }
    try {
        //Mandamos el id y el arreglo con los datos del registro
        const resultUpdateUser = await editUser(id_user, dataUser)
        //Resultado OK
        if (resultUpdateUser) {
            res.status(200).json({
                ok: true,
                msg: "Actualizacion exitosa",
                resultUpdateUser,

            });
        }

        //Manejo de errores 
    } catch (err) {
        res.status(500).send({ error: 'Ocurrio un problema con el servidor' });
        console.log(err);
    }
}
const ctrDeleteUser = async (req, res) => {
    const id_user = req.params.id
    try {
        const resultDelUser = await deleteUser(id_user)
        //Resultado OK
        if (resultDelUser)
            res.status(200).json({
                ok: true,
                resultDelUser,
            });
        //Manejo de errores 
    } catch (err) {
        res.status(500).send({ error: 'Ocurrio un problema con el servidor' });
        console.log(err);
    }
}

const ctrGetUserById = async (req, res) => {

    const id_user = req.params.id

    try {
        const resultGetUser = await getUserById(id_user)
        //Resultado OK
        if (resultGetUser)
            res.status(200).json({
                ok: true,
                resultGetUser,
            });

        //Manejo de errores 
    } catch (err) {
        res.status(500).send({ error: 'Ocurrio un problema con el servidor' });
        console.log(err);
    }
}




//Exportamos las funciones del archivo
module.exports = {
    getUsers,
    ctrCreateUser,
    ctrEditUser,
    ctrDeleteUser,
    ctrGetUserById,
    ctrSearchUsers
}