const Registration = require('../models/Registration');
const db=require('../models')

exports.addRegitration=(req,res)=>{
    console.log(req.body);

    let courseids =JSON.parse(req.body.courseids);

    let regs=[];
    for(courseid of courseids){
        regs.push(new Registration({courseid:courseid, regno:req.body.regno,gradeid:null}));

    }
    //console.log(regs)
    db.Registration.insertMany(regs)
    .then((regs)=>{
        res.status(200).json(regs);
    })
    // db.Student.find({regno:req.params.regno})
    // .then(student=> { 
    //     res.status(200).json(student[0]) })
}

exports.getRegitrationByRegNo=(req,res)=>{

    Promise.all([db.Registration.aggregate([
        { $match:{regno:req.params.regno}},
         {$lookup:{
             from:'courses',
             localField:'courseid',
             foreignField:'courseid',
             as:'course'
         }},
        { $unwind:"$course"},
        {$lookup:{
         from:'grades',
         localField:'gradeid',
         foreignField:'gradeid',
         as:'grade'
     }},
     { $unwind:{path:"$grade",preserveNullAndEmptyArrays:true}}
     ]),db.Grade.find().sort({gradeid:1})
    ])
    .then(([registrations,grades])=>{
         res.status(200).json({registrations, grades});
     });

    }