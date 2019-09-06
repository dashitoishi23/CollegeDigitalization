const express =require('express');
const app=express();
const mongoose=require('mongoose');
const cors = require('cors')
const db=require('./config/keys').mongoUrl;
const faculty=require('./routes/api/faculty');
const student=require('./routes/api/student');
const bodyParser=require('body-parser');
const passport=require('passport');
const passports=require('passport');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose.connect(db,{
    useNewUrlParser: true
})
.then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

  require('./config/passport')(passport);
  require('./config/passports')(passports);
 app.use(passport.initialize());
 app.use(passports.initialize());

app.use('/api/faculty',faculty);
app.use('/api/student',student);

  port=process.env.PORT||5000;

  app.listen(port,()=>{
      console.log(`server connected on the port at ${port}`);
  });