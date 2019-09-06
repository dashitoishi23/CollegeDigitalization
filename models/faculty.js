const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const facultySchema=new Schema({
    name:{
        type:String,
        required:true
    },
    employeeID:{
        type:String,
        required:true
    },
    ifheEmail:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});


module.exports=mongoose.model('faculty',facultySchema);