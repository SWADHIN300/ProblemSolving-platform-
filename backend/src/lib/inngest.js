import User from "../models/User.js";
import { connectDB } from "./db.js";
import { Inngest } from "inngest";


export const inngest = new Inngest({id:"problemsolving-platform"});

const syncUser = inngest.createFunction(
    {id:"sync-user"},
    {event:"clerk/user.created"},
     async({event}) =>{
        await connectDB();
        const {id,email_address,first_name,last_name,image_url} = event.data;

        const newUser = {
            clerkId:id,
            email:email_address,
            name:`${first_name || ""} ${last_name || ""}`,
            profileImage:image_url
        }
        await User.create(newUser);
     }
);

const deleteUserFromDB = inngest.createFunction(
    {id:"delete-user-from-db"},
    {event:"clerk/user-from-db"},
     async({ event })=>{
        await connectDB();

        const { id } = event.data;
        await User.deletOne({clerkId:id});
     }
);

export const functions = [syncUser,deleteUserFromDB];