import mongoose from "mongoose";


const adminSingupSchema=new mongoose.Schema({
    name:{type:String,require:true},
    number:{type:Number,require:true},
    password:{type:String,require:true}
})

const adminSingupModel=mongoose.model('admin',adminSingupSchema)
export default adminSingupModel