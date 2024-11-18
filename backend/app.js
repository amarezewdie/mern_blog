import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import "dotenv/config";
import connectDb from "./config/db.js";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
connectDb();
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
