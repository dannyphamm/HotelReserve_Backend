import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
const app = express()
dotenv.config()
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
    } catch (error) {
        throw (error)
    }
}


mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected")
})

mongoose.connection.on("connected", () => {
    console.log("MongoDB connected")
})


// middleware
app.use(express.json())
app.use(cookieParser())
app.use("/api/v1/auth", authRoute)
app.use("/api/v1/users", usersRoute)
app.use("/api/v1/rooms", roomsRoute)
app.use("/api/v1/hotels", hotelsRoute)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Internal server error";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

app.listen(8888, () => {
    connect();
    console.log("Server started on port 8888")
})