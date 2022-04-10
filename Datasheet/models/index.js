const mongoose=require('mongoose');

(async()=>{
await mongoose.connect('mongodb://localhost:27017/datasheet'),{ 
    useNewUrlParser:true,
    useUnifiedTopology: true
}
})();

module.exports={
Course:require('./Course'),
Grade:require('./Grade'),
Registration:require('./Registration'),
Student:require('./Student')
}