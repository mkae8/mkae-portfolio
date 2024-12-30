import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sendEmailController } from "./controllers/emailController";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.post("/send-email", sendEmailController);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
