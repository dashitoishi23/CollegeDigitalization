const Validator=require('validator');
const isEmpty=require('./isEmpty');

module.exports=function validatorFacultyLogin(data){
let errors={};


data.employeeID= isEmpty(data.employeeID)?'':data.employeeID;
data.password= isEmpty(data.password)?'':data.password;



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