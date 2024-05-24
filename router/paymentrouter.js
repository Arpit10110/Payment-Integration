import express from "express";
import {checkout,paymentverifification} from "../controller/controller.js"
const router= express.Router();
router.post("/checkout",checkout);
router.post("/paymentverifification",paymentverifification);
export default router;
