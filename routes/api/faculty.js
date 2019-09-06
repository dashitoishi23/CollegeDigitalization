const express=require('express');
const Faculty=require('../../models/faculty');
const facultyInfo = require('../../models/facultyInfo');
const facultyBackground=require('../../models/facultyBackground');
const passport=require('passport');
const router=express.Router();
const bcrypt = require('bcryptjs');
const jwt =require('jsonwebtoken');
const nodemailer = require('nodemailer')
const keys=require('../../config/keys');
const validatorFacultyRegister=require('../../validation/facultyRegister');
const validatorFacultyLogin=require('../../validation/facultyLogin');

router.get('/',(req,res)=>{
res.send('hello');
});
let otp = Math.floor(1000 + Math.random() * 9000);
let email = ''


router.post('/regis',(req,res)=>{
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
            console.log(req.body);
                   const newFaculty=new Faculty({
                       name:req.body.name,
                       employeeID:req.body.employeeID,
                       ifheEmail: req.body.emailhead+'@ifheindia.org',
                       password:req.body.password,
                   });
                   bcrypt.genSalt(10, (err, salt)=> {
                    bcrypt.hash(req.body.password, salt,(err, hash)=> {
                        if(err) throw err;
                        newFaculty.password=hash;
                        newFaculty.save()
                        .then(user=>{
                            console.log(user)
                        })
                        .catch(err=>console.log(err));
                    });
                }); 
        }
    })
    nodemailer.createTestAccount((err, account) => {
        let transporter = nodemailer.createTransport({
            service: 'gmail', 
            auth: {
              user: 'manutdrmabm@gmail.com',
              pass: 'lcd$creen1bmlpad' 
            },
            tls:{
              rejectUnauthorized: false
            }
        });
        
        // setup email data with unicode symbols
        console.log(req.body.emailhead);
        let mailOptions = {
            from: '"The User Registration" ', // sender address
            to: req.body.emailhead+'@ifheindia.org', // list of receivers
            subject: 'Your OTP for registration', // Subject line
            text: 'OTP Verfication', // plain text body
            html:  `<p>Hey  Your OTP is <em><b>${otp}</b></em>. Thank you for registering! </p>` // html body
        };
    
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    });
});


router.post('/otpVerify',(req,res)=>{
    if(otp.toString()===req.body.OTP){
        res.json({note:"Success"})
    }
    else{
        res.json({note:"Invalid OTP"})
    }
})

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
                    const payload={id:faculty.id,emp_id:faculty.employeeID,name:faculty.name,avatar:faculty.avatar};
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

router.post('/persinfo',passport.authenticate('faculty',{session:false}),(req,res)=>{
    Faculty.findOne({id:req.user.id})
    .then(faculty=>{
        const persInfo = new facultyInfo({
            id: req.user.id,
            Name: req.user.name,
            fatherName: req.body.fatherName,
            motherName: req.body.motherName,
            gender: req.body.gender,
            age: req.body.age,
            Address: req.body.address,
            Religion: req.body.religion,
            Nationality: req.body.Nationality,
            Current_Address: req.body.curArr,
            Mobile: req.body.mobile,
            Alt_Number: req.body.alt_num,
            Aadhar: req.body.aadhar,
            PAN: req.body.pan

        })
        persInfo.save()
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    })
});

router.post('/background',passport.authenticate('faculty',{session:false}),(req,res)=>{
    Faculty.findOne({user:req.user.id})
    .then(faculty=>{
        const persBackground=new facultyBackground({
        id:req.user.id,    
        Exam_Passed:req.body.Exam_Passed,
        Specialization:req.body.Specialization,
        Institute:req.body.Institute,
        University:req.body.University,
        Year_of_Passing:req.body.Year_of_Passing,
        Grade:req.body.Grade,
        Marks:req.body.Marks
        });
        persBackground.save()
        .then(data=>res.json(data))
        .catch(err=>console.log(err));
    })
});

router.get('/persbackgrounddetail',passport.authenticate('faculty',{session:false}),(req,res)=>{
    facultyBackground.find({id:req.user.id})
    .then(faculty=>{
        res.json(faculty);
    })
})
module.exports=router;