'use strict'
const multer=require('multer')
const path = require('path')

const storage = multer.diskStorage
({
    destination : (req,res,cb) => {
        cb(null,'./uploads');
    },
    filename : (req,file,cb) => {
        cb(null,  Date.now() + path.extname(file.originalname));
    }
});
const fileFilter = (req,file,cb) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
        cb(null , true)
    }else{
        cb(null,false)
    }
}

const upload = multer({
    storage : storage,
    fileFilter : fileFilter
})

module.exports = {
    upload
}