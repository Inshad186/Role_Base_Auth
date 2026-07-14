import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRouter from "./routes/authRouter";
import connetDB from "./config/databaseConfig";
import cookieParser from "cookie-parser";

dotenv.config();
connetDB();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(cookieParser())

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Server is Running by Inshad");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server is running on http://localhost:${PORT}`
  );
});