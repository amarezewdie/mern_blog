import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import connectDb from "./config/db.js";
import foodRouter from "./routes/foodRouter.js";

//app config
const app = express();
const port = process.env.PORT || 4000;
connectDb();

//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);

//api end point
app.use("/api/food", foodRouter);
app.use("/images", express.static("upload"));

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
