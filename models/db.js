const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/CousrseDB',{useNewUrlParser:true}, (err)=> {
    if(!err){
        console.log('mongodb connection succeded')}
    else{
        console.log('mongodb connection not succeded'+err)}
    
        
});

require('./courses.model');