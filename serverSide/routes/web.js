const userController =require('../controllers/userController');
const userLoginController = require('../controllers/loginController')
const express=require('express')
const routes=express.Router();
const {upload} = require('../utils/multer')

routes.put('/updateUser/:id' ,userController.updateUser)
routes.post('/createUser',upload.single('profileImage') ,userController.createUser)
routes.post('/userlogin',userLoginController.userLogin)
routes.get('/showUser',userController.showUser)
routes.post('/deleteUser/:id',userController.deleteUser)
routes.get('/showUser/:id',userController.getSingleUser)
module.exports = routes