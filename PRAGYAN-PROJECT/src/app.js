import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import { ApiError } from "./utilis/ApiError.js";
const app = express();
app.use(cors({ 
    origin : "http://localhost:5173",
    credentials : true
}));
app.use(express.json({limit : '50kb'}));
app.use(express.urlencoded({extended: true,limit: '16kb'}));
app.use(express.static('public'));


app.use(cookieParser());

import userRouter from './routes/user.routes.js';

import tripRouter from './routes/trip.routes.js'

import LandingRouter from './routes/landing.routes.js'

import rewardRouter from './routes/rewards.routes.js'

import collabRouter from './routes/collab.routes.js'

app.use("/api/v1/users", userRouter);
app.use("/api/v1/users/trips", tripRouter)
app.use("/api/v1/", LandingRouter)
app.use("/api/v1/users/",rewardRouter)
app.use("/api/v1/collab",collabRouter)


///learning process
app.get("/test-error", (req, res, next) => {
    // simulate throwing a custom error
    next(new ApiError(418, "This is a test error")); // 418: I'm a teapot 🫖 lol
});

// GLOBAL ERROR HANDLER — must be last middleware
app.use((err, req, res, next) => {
    console.error("🔥 Global Error Handler caught:", err);

    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error",
        errors: err.errors || [],
        data: err.data || null,
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined
    });
});

export { app }; 

   