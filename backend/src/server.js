import express from "express";
import { ENV } from "./lib/env.js";
import path from "path";
import { connectDB } from "./lib/db.js";

const app = express();

const __dirname = path.resolve();

app.use(express.json());

app.get('/home',(req,res)=>{
    res.status(200).json({
        message:"Your are Welcome"
    });
})

//make our app ready for deployment
if(ENV.NODE_ENV === "production"){
     app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("/{*any}",(req,res)=>{
        res.sendFile(path.join(__dirname, "../frontend","dist","index.html"));
    })
}

 const startServer = async () =>{
    try {
        await connectDB();
        app.listen(ENV.PORT , ()=>{
        console.log("server started at: ",ENV.PORT);
   });
    } catch (error) {
        console.error("Error at starting the Server",error);
    }
 }

 s
