import mongoose from "mongoose";

//UTR
let utrSchema=new mongoose.Schema({
    UTR:[Number]
})
let utrModel=mongoose.model("UTR",utrSchema)
export default utrModel