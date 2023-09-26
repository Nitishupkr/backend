const mongoose=require("mongoose");
// this is used to give the structure to thne backend  and give the schema for the database and and in the controler we use to define the business logic to acces the model in which we have made the structure and route is used to give the path to acess the data anf config file is used to connect your db to the appplication 
const todoSchema=new mongoose.Schema(
    {
    titile:{
        type:String,
        required:true,
        maxLength:50,
    },
    description:{
        type:String,
        required:true,
        maxLength:50, 
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now(),
    },
    updatedAt:{
        type:Date,
        required:true,
        default:Date.now(),
    }
}
);
module.exports=mongoose.model("Todo",todoSchema);