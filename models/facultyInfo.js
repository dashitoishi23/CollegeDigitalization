const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const facultyinfoSchema=new Schema({
    id:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    fatherName:{
        type: String,
        required:true
    },
    motherName:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    age:{
        type: String,
        required: true
    },
    Address:{
        type: String,
        required: true
    },
    Religion:{
        type: String,
        required: true
    },
    Nationality: {
        type: String,
        required: true   
            },
    Current_Address: {
        type: String,
        required: true    
            },
    Mobile: {
        type: Number,
        required: true
    },
    Alt_Number: {
        type: Number,
        required: true
    },
    Aadhar: {
        type: String,
        required: true 
    },
    PAN: {
        type: String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    }
});


module.exports=mongoose.model('facultyinfo',facultyinfoSchema);