import mongoose from "mongoose";
 const dbconnect=()=>{
    mongoose.connect(process.env.Mongo_Url,({dbname:"payment"})).then(()=>{
        console.log("dB coonected");
    }).catch((e)=>{
        console.log(e);
    })
}
export default dbconnect