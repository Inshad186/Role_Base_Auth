import dotenv from "dotenv";
dotenv.config()

import express from "express";
import cors from "cors";
import { connectRedis } from "./config/redisConfig";

import authRouter from "./routes/authRouter";
import connetDB from "./config/databaseConfig";
import cookieParser from "cookie-parser";

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

const PORT = process.env.PORT || 5001;

const startServer = async() => {
  try {
    await connectRedis()

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error("Failed to start server", error)
  }
}

startServer();