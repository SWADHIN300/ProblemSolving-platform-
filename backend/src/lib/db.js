import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () =>{
    try {
        const connect = await mongoose.connect(ENV.DB_URL);
         console.log("connected to mongoDB",connect.connection.host);
    } catch (error) {
        console.error("Error occure during connect to mongoDB",error);
         process.exit(1);
    }
}