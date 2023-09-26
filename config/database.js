const mongoose=require('mongoose');
require('dotenv').config();
const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewParser:true,
        useUnifiedTopology:true,
    })
    .then(()=> console.log("succesfull connect db"))
    .catch((error)=>{
        console.log("error in connection");
        console.log(error.message);
        process.exit(1);
    });
}
module.exports=dbConnect;