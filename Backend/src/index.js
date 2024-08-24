import express from "express";
import dotenv from "dotenv";
import userRouter from "./router/userRoutes.js";
import adminRouter from "./router/adminRoutes.js";
import allRouter from "./router/allRoutes.js";
import connection from "./config/db.js";
import cors from 'cors'

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT || 3100;

// Middleware to parse JSON requests
app.use(express.json());

// Use routes from userRouter with a prefix
app.use("/user", userRouter);
app.use("/admin",adminRouter)
app.use("/all",allRouter)

// Basic route


// Start the server
app.listen(port, async() => {
    try {
        await connection
        console.log(`Server is running on http://localhost:${port} and MongoDB `);
      } catch (error) {
        console.log(`Server not running ${error}`)
      }
});
