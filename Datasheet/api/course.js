const router=require('express').Router();
const Controller=require('../controller');

router.get('/all',Controller.Courses.GetAllSemesters);
router.get('/:semester',Controller.Courses.GetSemesterCourses);

module.exports=router;