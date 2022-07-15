const mongoose= require('mongoose')

const userSchema =  mongoose.Schema({

    name :{
        type: String,
        require : true
    },
    phone:{
        type: Number
        
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password : {
        type: String,
        require : true
    }
});

const userModel = mongoose.model('Users' , userSchema);

module.exports = userModel