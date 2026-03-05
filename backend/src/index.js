import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.listen(3030, () => {
  console.log("🔥 THIS SERVER IS RUNNING ON 3030 🔥");
});

// database connection
import mongoose from "mongoose";
mongoose.connect(process.env.DB_URL)
.then(()=>console.log("Database connected !"))
.catch(()=>console.log("Database not connected !"));

import cookieParser from 'cookie-parser';
app.use(cookieParser());

// app level middleware
import morgan from "morgan";
app.use(morgan('dev'));
app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// route level middleware
import userRouter from "./user/user.routes.js";
app.use("/api/user",userRouter);