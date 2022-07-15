const UserModel = require('../models/userModel.js')
const path=require('path')
const bcrypt = require('bcrypt')



exports.userLogin = async (req,res,next) => { 
    try{
        const loginData = new UserModel({
            email:req.body.email,
            password:req.body.password
        })
       // console.log(req.body)
        UserModel.findOne({email : loginData.email}, (err,user) => {
           if(user){
                if(loginData.password === user.password){
                    res.send({message : "Login successfully "})
                }else{
                    res.send({message : "Incorrect Username and Password "})
                }
           }else{
            res.send({message : "Password Didn't match "})
           }
        })
    }catch(error){
        console.log(error)
    }
}

