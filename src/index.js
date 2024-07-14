import mongoose from 'mongoose'
import express from "express"

import { DB_NAME } from "./constants.js"
const app= express()


import connectDB from "./db/index.js"
import  dotenv  from "dotenv"

dotenv.config({
    path: './env'
})



connectDB()








// ;( async ()=>{
//     try {
//      await   mongoose.connect(`${process.env.MOGODB_URI}/${DB_NAME}`)
//         app.on("error", (error)=>{
//             confirm.log("error",error);
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`listening start ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("ERROR: ", error)
//         process.exit(1)
//     }

// })()