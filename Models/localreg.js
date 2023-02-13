import mongoose from "mongoose";
const local =mongoose.Schema({
    CollegeName:{
        type:String,
        required:true,
    },
    lotno:{
        type:String,
        trim:true,
        required:true
    },
    EventName:{
        type:String,
        required:true,
        trim:true
    },
    Sname:{
        type:String,
        required:true,
    },
    Score:{
        type:Number,
        required:true
    }
})
let LocalReg;
try{
    LocalReg=mongoose.model("LocalRegistration");
}catch{
    LocalReg=mongoose.model("LocalRegistration",local)
}
export default LocalReg;