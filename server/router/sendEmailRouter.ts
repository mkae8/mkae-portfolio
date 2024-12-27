import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();
const transporter = nodemailer.createTransport({
  host: "smtp.example.com",
  port: 587,
  secure: false,
  auth: {
    user: "your-email@example.com",
    pass: "your-password",
  },
});

router.post("/send-email", async (req, res) => {
  try {
    const { to, subject, text } = req.body;
    const info = await transporter.sendMail({
      from: '"Your Name" <your-email@example.com>',
      to: to,
      subject: subject,
      text: text,
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

export default router;
