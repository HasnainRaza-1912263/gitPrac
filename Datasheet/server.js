const express=require('express')
const morgan =require('morgan');
const path=require('path');

const indexRouter=require('./routes/index');
const apiStudent=require('./api/student');
const apiCourse=require('./api/course');
const apiRegistration=require('./api/registration');

const app= express();


app.set('views',path.join(__dirname,'views'));
app.set('view engine','vash');

app.use(morgan('dev'));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/bootstrap',express.static(path.join(__dirname,'/node_modules/bootstrap/dist')));

app.use('/jquery',express.static(path.join(__dirname,'/node_modules/jquery/dist')));

app.use('/',indexRouter)
app.use('/api/students/',apiStudent)
app.use('/api/courses/',apiCourse)
app.use('/api/registration/',apiRegistration)

app.listen(3400,()=>{
    console.log('Server is running on http://localhost:3400');
})