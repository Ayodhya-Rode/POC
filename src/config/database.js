import  config  from "./config.js"
import mongoose from "mongoose";

async function connectDB() {
    
    try {
        await mongoose.connect(config.MONGO_URI)
        console.log("DB connected ");
        
    } catch (error) {
        throw new Error ("Error to connect DB")
    }
    
}


export default connectDB