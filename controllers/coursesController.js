 const express = require('express');
var router = express.Router();
const mongoose =require('mongoose');
const Courses = mongoose.model('Courses');

router.get ('/',(req,res)=>{
    res.render('courses/addOrEdit',{
        viewTitle:"Insert Course"
    });
});


router.post('/',(req,res)=>{
   insertRecord(req,res);
});

function insertRecord(req,res){
    var courses= new Courses();
    courses.courseName=req.body.courseName;
    courses.courseId=req.body.courseId;
    courses.courseDuration=req.body.courseDuration;
    courses.courseFee=req.body.courseFee;
    courses.save((err,doc) => {
         if(!err)
           res.redirect('courses/list');
         else{
             if(err.name=='validationError'){
             handleValidationError(err,req.body);
             res.render('courses/addOrEdit',{
                viewTitle:"Insert Course",
                courses:req.body
            });     
         }
              else{
             console.log('Error during record insertion:'+err); 
              }
            }
    });

}
router.get('/list',(req,res)=>{
   
    Courses.find((err,docs)=>{
        if(!err){
            res.render("courses/list",{
                list:docs
            });
        }
    else{
     console.log('Error in retreiving courses list:'+err);
    }

    
});
});
function handleValidationError(err,body){
    for(field in err.  errors){
        switch (err.error[field].path){
            case'courseName':
               body['courseNameError']=err.errors[field].message;
               break;
            case 'courseID':
               body['courseIDError']=err.errors[field].message;
               break; 
            default:
                break;
        }
    }
}
 
module.exports= router;