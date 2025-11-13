import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    profileImage:{
        type:String,
        default:""
    },
    clerkId:{
        type:String,
        rerquied:true,
        unqique:true,
    },
},{
    timestamps:true,
});

const User = mongoose.model("user",userSchema);

export default User;