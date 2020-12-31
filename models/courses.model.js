
const mongoose= require('mongoose');

var coursesSchema = new mongoose.Schema({
    courseName:{
        type:String
      
    },

    courseID:{
        type:String
    },

    courseDuration:{
        type:String
    },

    courseFee:{
        type:String
    }
    
}); 


mongoose.model('Courses',coursesSchema);

