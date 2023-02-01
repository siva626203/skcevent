const mongoose = require("mongoose");

const CollegeSchema = new mongoose.Schema({
  lotno:{
    type:String,
    required:true
  },collegename:{
    type:String
  },
  department:{
    type:String,
  }
});
let College ;
try {
    College= mongoose.model("Colleges");
} catch {
    College= mongoose.model("Colleges", CollegeSchema);
}
module.exports = College;