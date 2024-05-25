import {instance} from "../server.js"
import crypto from "crypto"
export const checkout= async(req,res)=>{
    const options = {
        amount: Number(req.body.amount * 100),  // amount in the smallest currency unit
        currency: "INR",
      };
     const order = await instance.orders.create(options);
     console.log(order)
     res.json({
        success: true,
        order
     })
}
export const paymentverifification= async(req,res)=>{
  console.log(req.body)
  const {razorpay_payment_id,razorpay_order_id,razorpay_signature}=req.body;
  const body = razorpay_order_id+ "|" + razorpay_payment_id
  const generated_signature = crypto
  .createHmac("sha256",process.env.API_SECRET_KEY)
  .update(body.toString())
  .digest("hex")
  const isPayment = razorpay_signature == generated_signature
  if (isPayment)
  {
    res.redirect(`https://payment-integration-frontend.vercel.app//#paymentsuccess?refrence=${razorpay_order_id}`);
  }
  else{
    res.redirect(`https://payment-integration-frontend.vercel.app//#paymentfail?refrence=${razorpay_order_id}`);
  }
}