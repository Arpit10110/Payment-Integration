import express from "express"
import router from "./router/paymentrouter.js";
import { config } from "dotenv";
import cors from "cors";
export const app =express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router)
config({
    path:"./db/config.env"
})