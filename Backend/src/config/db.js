import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const URL = process.env.URL

const connection=mongoose.connect(`mongodb://localhost:27017/amazon`)

export default connection