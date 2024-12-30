import { emailSender } from "../utils/emailSender";
import { generateEmailHTML } from "../utils/emailTemplate";

export const sendEmailController = async (req: any, res: any) => {
  try {
    const { email, message, phoneNumber } = req.body;

    if (!email || !message) {
      return res.status(400).json({ error: "Email and message are required." });
    }

    const subject = "New Message Received";
    const html = generateEmailHTML(message, phoneNumber, email);
    const text = `Message: ${message}\nPhone Number: ${phoneNumber}`;

    await emailSender(email, subject, html, text);

    res.status(201).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};
