const Validator=require('validator');
const isEmpty=require('./isEmpty');

module.exports=function validatorStudentRegister(data){
let errors={};

data.name= !isEmpty(data.name)? data.name: '';
data.enrollment= isEmpty(data.enrollment)?'':data.enrollment;
data.password= isEmpty(data.password)?'':data.password;


if(!Validator.isLength(data.name,{min:2,max:30})){
    errors.name="name must be in 2 to 30 words";
}
if(Validator.isEmpty(data.name)){
    errors.name="name cannot be empty";
}
if(!Validator.isLength(data.enrollment,{min:11,max:11})){
    errors.enrollment="register with valid enrollment number";
}
if(Validator.isEmpty(data.enrollment)){
    errors.enrollment="enrollment cannot be empty";
}


if(!Validator.isLength(data.password,{min:5,max:10})){
    errors.password="password must be in 5 to 10 words";
}
if(Validator.isEmpty(data.password)){
    errors.password="password cannot be empty";
}


return {
    errors,
    isValid: isEmpty(errors)
  };

}