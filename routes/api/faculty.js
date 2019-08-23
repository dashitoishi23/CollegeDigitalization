const express=require('express');
const Faculty=require('../../models/faculty');
const passport=require('passport');
const router=express.Router();
const bcrypt = require('bcryptjs');
const jwt =require('jsonwebtoken');
const keys=require('../../config/keys');
const validatorFacultyRegister=require('../../validation/facultyRegister');
const validatorFacultyLogin=require('../../validation/facultyLogin');

router.get('/',(req,res)=>{
res.send('hello');
});

router.post('/register',(req,res)=>{
    const {errors,isValid}=validatorFacultyRegister(req.body);
    if(!isValid){
        return res.status(404).json(errors);
    }
    Faculty.findOne({employeeID:req.body.employeeID})
    .then(faculty=>{
        if(faculty){
            return res.status(404).json({err:"faculty already exists"});
        }
        else{
            
                   const newFaculty=new Faculty({
                       name:req.body.name,
                       employeeID:req.body.employeeID,
                       password:req.body.password,
                   });
                   bcrypt.genSalt(10, (err, salt)=> {
                    bcrypt.hash(req.body.password, salt,(err, hash)=> {
                        if(err) throw err;
                        newFaculty.password=hash;
                        newFaculty.save()
                        .then(user=>res.json(user))
                        .catch(err=>console.log(err));
                    });
                }); 
        }
    })
});

router.post('/login',(req,res)=>{
    const {errors,isValid}=validatorFacultyLogin(req.body);
    if(!isValid){
        return res.status(404).json(errors);
    }
    Faculty.findOne({employeeID:req.body.employeeID})
    .then(faculty=>{
        if(faculty){
            bcrypt.compare(req.body.password,faculty.password)
            .then(isMatch=>{
                if(!isMatch){
                    return res.status(404).json({err:"invalid password"})
                }
                else{
                    const payload={id:faculty.id,name:faculty.name,avatar:faculty.avatar};
                    jwt.sign(payload,keys.secretOrKey,{expiresIn:60*60*3},
                        (err,token)=>{
                            res.json({
                                success:true,
                                faculty:true,
                                token:'bearer '+token
                            })
                    })
                    // return res.json({ok:"email"}) 
                }
            })
        }
        else{
            return res.status(404).json({err:"invalid email"})
        }
    })
})

router.get('/all',passport.authenticate('faculty',{session:false}),(req,res)=>{
Faculty.find()
.then(faculty=>{
    if(faculty){
        res.json(faculty);
    }else{
        res.status(404).json({err:"no faculty found"});
    }
})
})

module.exports=router;