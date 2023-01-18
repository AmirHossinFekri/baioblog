import mongoose from "mongoose";

export const connectDB=async ()=>{

    try{
        const conn=await mongoose.connect(process.env.MONGO_URL,{

        });
        
        console.log("connect into MONGOSE ");
    }

    catch(err){
        console.log(err);
        process.exit(1);
    }
}

