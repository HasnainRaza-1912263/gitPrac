const express = require('express');
router=express.Router();
const Controller =require('../controller');


router.post('/add',Controller.Registration.addRegitration)

router.get('/:regno',Controller.Registration.getRegitrationByRegNo)



module.exports=router;