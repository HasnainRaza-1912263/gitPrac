const mongoose=require('mongoose');
const db =require('./models');

// db.Student.find()
// .then(students=>{
//     console.log(JSON.stringify(students,null,'\t'))
//     process.exit();
// })

// db.Course.find({semester:1})
// .then(courses=>{
//     console.log(courses)
// })

db.Registration.aggregate([
   { $match:{regno:'1112110'}},
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
]).then((res)=>{
    console.log(JSON.stringify(res,null,'\t'));
    process.exit();
});