import { app } from "./app.js";
import dbconnect from "./db/dbconnect.js"
import Razorpay from "razorpay"
export const instance = new Razorpay({
    key_id: process.env.API_KEY,
    key_secret: process.env.API_SECRET_KEY,
  });
dbconnect();
app.listen(process.env.Port,()=>{
    console.log(`listening on port ${process.env.Port}`);
})