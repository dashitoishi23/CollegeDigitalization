const express = require('express');
const router = express.Router();
const Student = require('../../models/student');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport=require('passport');
const validatorStudentRegister=require('../../validation/studentRegister');
const validatorStudentLogin=require('../../validation/studentLogin');

router.post('/register', (req, res) => {
    const {errors,isValid}=validatorStudentRegister(req.body);
    if(!isValid){
        return res.status(404).json(errors);
    }
    Student.findOne({ enrollment: req.body.enrollment })
        .then(student => {
            if (student) {
                errors.enrollment="student enrollment already exists"
                return res.status(404).json(errors);
            }
            else {
                
                const newStudent = new Student({
                    name: req.body.name,
                    enrollment: req.body.enrollment,
                    password: req.body.password,
                    
                });
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(req.body.password, salt, (err, hash) => {
                        if (err) throw err;
                        newStudent.password = hash;
                        newStudent.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    });
                });
            }
        })
});

router.post('/login', (req, res) => {
    const {errors,isValid}=validatorStudentLogin(req.body);
    if(!isValid){
        return res.status(404).json(errors);
    }
    Student.findOne({ enrollment: req.body.enrollment })
        .then((student) => {
            if (student) {
                bcrypt.compare(req.body.password, student.password)
                    .then((isMatch) => {
                        if (isMatch) {
                            const payload = { id: student.id, name: student.name, avatar: student.avatar };
                            jwt.sign(payload, keys.secretOrKey, { expiresIn: 60*60*3 },
                                (err, token) => {
                                    res.json({
                                        success: true,
                                        student:true,
                                        token: 'bearer ' + token
                                    })
                                })
                        }
                        else {
                            res.status(404).json({ err: "password invalid" });
                        }
                    })
            }
            else {
                return res.status(404).json({ err: "invalid enrollment" });
            }
        })
});

router.get('/all',passport.authenticate('student',{session:false}),(req,res)=>{
Student.find()
.then(student=>{
    if(student){
        res.json(student);
    }else{
        return res.status(404).json({err:"no student found"});
    }
})
});




module.exports = router;