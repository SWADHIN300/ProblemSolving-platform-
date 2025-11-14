import { ENV } from "./env.js";
import { StreamChat } from "stream-chat";


const apiKey = ENV.STREM_API_KEY;
const apiSecret = ENV.STREM_API_SECRET;

if(!apiKey || !apiSecret){
    console.error("you missing something");
}

export const chatClient = StreamChat.getInstance(apiKey,apiSecret);

export const upsertStreamUser = async (userData) =>{
    try {
        await chatClient.upsertUser(userData)
        console.log("Stream user upserted successfully:",userData);
    } catch (error) {
        console.error("Error upstreaming user:",error);
    }
}


export const deleteStreamuser = async (userId) =>{
    try {
        await chatClient.deleteUser(userId);
        console.log("Stream user deleted: ",userId);
    } catch (error) {
        console.log("Error during delete the user: ",userId);
    }
}