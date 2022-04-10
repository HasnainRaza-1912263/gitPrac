const db=require('../models');

exports.GetAllSemesters=(req,res)=>{
    db.Course.distinct('semester')
    .then(semesters=>{
        res.status(200).json(semesters)
    })
}

exports.GetSemesterCourses=(req,res)=>{
    db.Course.find({semester:req.params.semester}).sort({courseid:1})
    .then(courses=>{
        res.status(200).json(courses)
    })
}