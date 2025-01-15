import nodemailer from "nodemailer";
import { Request, Response } from "express";
import env from "dotenv";

env.config();

const emailSender = async (
  sendEmail: any,
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

export const sendEmailController = async (req: Request, res: Response) => {
  try {
    const { email, phoneNumber, message } = req.body;
    await emailSender(
      email,
      "Таны холбоо барих хүсэлт",
      `
         <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Таны холбоо барих хүсэлт</title>
  </head>
  <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
      <table role="presentation" style="width: 100%; border-collapse: collapse;">
          <tr>
              <td align="center" style="padding: 40px 0;">
                  <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 4px 10px rgba(0,0,0,0.1); border-radius: 8px; overflow: hidden;">
                      <!-- Header -->
                      <tr>
                          <td style="padding: 40px 30px; background: linear-gradient(135deg, #00466a 0%, #4a90e2 100%); text-align: center;">
                              <h1 style="color: #ffffff; font-size: 28px; margin: 0;">Таны холбоо барих хүсэлт</h1>
                          </td>
                      </tr>
                      <!-- Content -->
                      <tr>
                          <td style="padding: 40px 30px;">
                              <p style="font-size: 16px; line-height: 1.5; color: #333333; margin-bottom: 20px;">
                                  Сайн байна уу? Таньтай холбоо барих хүсэлтийг хүлээн авлаа.
                              </p>
                              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                                  <tr>
                                      <td style="padding: 10px; background-color: #f8f8f8; border-radius: 4px;">
                                          <p style="font-size: 16px; color: #333333; margin: 0;"><strong>Имэйл:</strong> ${email}</p>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td style="padding: 10px; background-color: #ffffff;">
                                          <p style="font-size: 16px; color: #333333; margin: 0;"><strong>Утасны дугаар:</strong> ${phoneNumber}</p>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td style="padding: 10px; background-color: #f8f8f8; border-radius: 4px;">
                                          <p style="font-size: 16px; color: #333333; margin: 0;"><strong>Мессеж:</strong></p>
                                          <p style="font-size: 16px; color: #333333; margin: 10px 0 0 0;">${message}</p>
                                      </td>
                                  </tr>
                              </table>
                              <p style="font-size: 16px; line-height: 1.5; color: #333333;">
        `,
      "Contact Request"
    );
    res.status(200).json({ message: "Имэйл илгээсэн" });
  } catch (error) {
    console.log("Error sending email:", error);
    res.status(500).json({ message: "Имэйл илгээхэд алдаа гарлаа" });
  }
};
