const JwtStrategy=require('passport-jwt').Strategy;

const ExtractJwt=require('passport-jwt').ExtractJwt;
// const mongoose=require('mongoose');
const Student =require('../models/student');
// const Faculty=require('../models/faculty');
const keys=require('./keys');

const opts={};
opts.jwtFromRequest=ExtractJwt.fromAuthHeaderAsBearerToken();

opts.secretOrKey=keys.secretOrKey;

// module.exports=passports=>{
//     passports.use('faculty',new JwtStrategy(opts,(jwt_payload,done)=>{
//         Faculty.findById(jwt_payload.id)
//         .then(faculty=>{
//             if(faculty){
//                 return done(null,faculty);
//             }
//             else{
//                 return done(null,false);
//             }
//         }).catch(err=>console.log(err)); 
//    }));
// }

module.exports=passport=>{
    passport.use('student',new JwtStrategy(opts,(jwt_payload,done)=>{
         Student.findById(jwt_payload.id)
        .then(student=>{
            if(student){
                return done(null,student);
            }
            else{
                return done(null,false);
            }
        }).catch(err=>console.log(err)); 
        
 

    }));
   
}
