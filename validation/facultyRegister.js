const Validator=require('validator');
const isEmpty=require('./isEmpty');

module.exports=function validatorFacultyRegister(data){
let errors={};

data.name= !isEmpty(data.name)? data.name: '';
data.employeeID= isEmpty(data.employeeID)?'':data.employeeID;
data.subject= isEmpty(data.subject)?'':data.subject;
data.password= isEmpty(data.password)?'':data.password;
data.password2= isEmpty(data.password2)?'':data.password2;

if(!Validator.isLength(data.name,{min:2,max:30})){
    errors.name="name must be in 2 to 30 words";
}
if(Validator.isEmpty(data.name)){
    errors.name="name cannot be empty";
}

if (!Validator.isLength(data.employeeID,{min:2,max:10})) {
    errors.employeeID = 'employeeID is invalid';
  }
if (Validator.isEmpty(data.employeeID)) {
    errors.employeeID = 'employeeID field is required';
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