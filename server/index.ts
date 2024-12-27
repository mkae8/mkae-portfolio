import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sendEmailRouter from "./router/sendEmailRouter";

dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use("/api", sendEmailRouter);
app.listen(port, () => {
  console.log(`nee deer asna --> http://localhost:${port}`);
});
