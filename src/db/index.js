import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"
 const connectDB= async()=>{
    try {
        const connectionInstance= await mongoose.connect(`${process.env.MOGODB_URI}/${DB_NAME}`)
        console.log(`/n mongoose connection !! hoste:${connectionInstance}`)
    } catch (error) {
        console.log("Mongoose connection Failed",error)
        process.exit(1)
        
    }
 }
 export default connectDB