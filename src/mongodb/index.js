import mongoose from "mongoose";
const connection={};
async function dbconnect() {
  if(connection.isConnected){
    return;
  }
  const db= await mongoose.connect(process.env.MONGO_DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
  });
  connection.isConnected=db.connections[0].readyState;
  console.log()
}
export default dbconnect;