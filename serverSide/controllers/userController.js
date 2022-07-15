const UserModel = require('../models/userModel.js')
const path=require('path')
const bcrypt = require('bcrypt')
const userModel = require('../models/userModel.js')


exports.createUser = async (req,res,next) => { 
    try{
        const saltPassword = await bcrypt.genSalt(10)
        const securePassword = await bcrypt.hash(req.body.password,saltPassword)
        const userInfo = new UserModel({
            name :req.body.name,
            phone:req.body.phone,
            email:req.body.email,
            password:securePassword,
        });
        console.log(req.body)
        const data= userInfo.save();
        console.log('data is saved')
        res.send((await data).toJSON())
    }catch(error){
        console.log(error)
    }
}

exports.getSingleUser = async (req,res,next) => {
    console.log(req.params.id)
    await UserModel.findById(req.params.id)
    .then(userfound => {
        console.log(userfound)
        if(!userfound){
            return res.status(404).end();
        }else{
            return res.status(200).json(userfound)
        }
    }).catch(err => next(err))
}

exports.showUser = async (req,res,next) => {
  await  UserModel.find().then(result => res.send(result))
}

exports.updateUser = async (req,res,next) => {
    try{
      const user = await userModel.findById(req.params.id)
      user.name = req.body.name
      user.phone = req.body.phone
      user.email = req.body.email
      user.password = req.body.password
      const result = await user.save()
      res.json(result)
    }catch(err) {
        console.log(err)
    }
  
}
exports.deleteUser = async (req,res,next) => {
    try{
        const result= await userModel.findByIdAndDelete(req.params.id);
        res.send('message : deleted successfully ')
    }catch(err){
        console.log(err)
    }

}

