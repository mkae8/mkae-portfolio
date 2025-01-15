import { Router } from "express";
import { sendEmailController } from "../controllers/sendEmailController";

const sendRoute = Router();
sendRoute.route("/send-email").post(sendEmailController);

export default sendRoute;
