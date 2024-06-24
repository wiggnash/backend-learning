// make the env variable available as soon as possible , therefore put in on top of everything

// method 1
// require('dotenv').config({ path: './env'});

// method 2
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})
connectDB();

/*

//======== DB CONNETION METHOD 1 ===========
import express from 'express'
const app = express();
// method 1

// const connectDB = () => {

// }

// connectDB();


//===============================================
// method 2 : IFFE : better approach

(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${ DB_NAME }`)
        app.on("error", (error) => {
            console.log("Error : ",error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`Listening on port ${process.env.PORT}`)
        })
    }catch(err){
        console.error("Error : ",err);
        throw err;
    }
})()

*/