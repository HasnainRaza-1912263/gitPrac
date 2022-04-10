const express=require('express');
const router=express.Router();
const Controller =require('../controller');


router.get('/:regno',Controller.Student.getStudentByRegNo)



module.exports=router;