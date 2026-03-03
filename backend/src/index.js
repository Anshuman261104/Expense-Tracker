import express from "express";
const app = express();
app.listen(3030,()=>console.log("Server is running on port 3030"));

// app level middleware
import morgan from "morgan";
app.use(morgan('dev'));
app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// route level middleware
import userRouter from "./user/user.routes.js";
app.use("/api/user",userRouter);