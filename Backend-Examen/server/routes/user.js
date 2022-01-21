
'use strict';
//Modules and files
const router = require('express').Router();
const {ctrCreateUser,getUsers,ctrEditUser,ctrDeleteUser,ctrGetUserById,ctrSearchUsers } = require("../controllers/user");


//POST user with middlewares
router.post('/create-user',ctrCreateUser ,async (req, res) => {
});

router.get('/get-users',getUsers);
router.get('/search/:type/:termino',ctrSearchUsers);
router.get('/get-user/:id',ctrGetUserById );

router.put('/edit-user/:id',ctrEditUser ,async (req, res) => {
});

router.delete('/delete-user/:id',
ctrDeleteUser
);


module.exports = router;