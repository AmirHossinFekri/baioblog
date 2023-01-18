import mongoose from "mongoose";
/**
 * @param [User] is schema as a model 
 * you can import them with {User} 
 * import {User} from "Adress/of/this/file"
 */
const UserSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
         type:String,
         required:true,
         minlength:4,
         maxlengh:32
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

export const User=mongoose.model("User",UserSchema);