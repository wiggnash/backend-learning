import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async() => {
    try{

        //mongoose will return object after the connection , whatever is the resposnse we will hold in this variable 
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected DB host ${connectionInstance.connection.host}`);
    }catch(err){
        console.error("Error : MongoDB connection error ",err);

        // the application has some process and the reference of tha is the process 
        process.exit(1)
    }
}

export default connectDB