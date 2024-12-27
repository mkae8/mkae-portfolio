/* eslint-disable @typescript-eslint/no-explicit-any */
import nodemailer from "nodemailer";
import express from "express";
import cors from "cors";
import env from "dotenv";

env.config();

const app = express();
app.use(express.json());
app.use(cors());

const emailSender = async (
  sendEmail: string,
  subject: string,
  html: string,
  text: string
) => {
  const transport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const options = {
    from: process.env.EMAIL_USER,
    to: sendEmail,
    subject: subject,
    text: text,
    html: html,
  };

  await transport.sendMail(options);
};

export const sendEmailController = async (req: any, res: any) => {
  const { email, username, message } = req.body;
  await emailSender(
    email,
    "One Time Password",
    `
      <div style="font-family: Helvetica, Arial, sans-serif; text-align: center; padding: 20px;">
        <h2 style="color: #00466a; font-size: 24px; margin-bottom: 20px;">Таны нэг удаагийн нууц үг</h2>
        <div style="color: green; font-size: 48px; font-weight: bold; border: 2px solid green; border-radius: 8px; padding: 20px; display: inline-block;">
          ${username}, ${message}, ${email}
        </div>
        <p style="font-size: 16px; margin-top: 20px;">Энэхүү OTP нь богино хугацаанд хүчинтэй. </p>
      </div>
    `,
    `Your One Time Password is: ${message}`
  );

  res.send("Имэйл илгээсэн").status(201);
};
