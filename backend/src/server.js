import express from "express";
import { ENV } from "./lib/env.js";
import path from "path";
import { connectDB } from "./lib/db.js";
import cors from "cors";

const app = express();

const __dirname = path.resolve();

app.use(express.json());
app.use(cors());
// app.use((req, res, next) => {
//   res.setHeader(
//     "Content-Security-Policy",
//     "default-src 'none'; connect-src 'self' http://localhost:3000; script-src 'self'; style-src 'self';"
//   );
//   next();
// });

app.get('/home',(req,res)=>{
    res.status(200).json({
        message:"Your are Welcome"
    });
})

//make our app ready for deployment
if(ENV.NODE_ENV === "development"){
     app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("/{*any}",(req,res)=>{
        res.sendFile(path.join(__dirname, "../frontend","dist","index.html"));
    })
}

 const startServer = async () =>{
    try {
        await connectDB();
        const PORT = process.env.PORT || ENV.PORT || 3000;
    app.listen(PORT, () => console.log(`Server started at: ${PORT}`));
    } catch (error) {
        console.error("Error at starting the Server",error);
        process.exit(1);
    }
 }

 startServer();
