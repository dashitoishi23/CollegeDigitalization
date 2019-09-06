const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const facultyBackgroundSchema=new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'faculty'
      },
      id:{
        type:String,
        required:true
    },
    Exam_Passed:{
        type:String,
        required:true
    },
    Specialization:{
        type:String,
        required:true
    },
    Institute:{
        type:String,
        required:true
    },
    University:{
        type:String,
        required:true
    },
    Year_of_Passing:{
        type:String,
        required:true
    },
    Grade:{
        type:String,
        required:true
    },
    Marks:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});


module.exports=mongoose.model('facultyBackground',facultyBackgroundSchema);