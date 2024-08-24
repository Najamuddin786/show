import mongoose from "mongoose";
import moment from "moment-timezone";


const userSingupSchema=new mongoose.Schema({
    name:{type:String,require:true},
    number:{type:Number,require:true},
    password:{type:String,require:true},
    // product:[
    //     {time,data,productDetail,}
    // ]

     recharge: [], //this array store , {time,amount,id,UTR}
    wallet: [Number],
    withdrawal: [Number],
        product: String,
    createdAt: {
        type: Date,
        default:moment().tz('Asia/Kolkata').format('YYYY-MM-DDTHH:mm:ss')
    }
})

const userSingupModel=mongoose.model('user',userSingupSchema)
export default userSingupModel