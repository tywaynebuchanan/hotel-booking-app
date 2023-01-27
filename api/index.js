import express from 'express';
import dotenv from "dotenv";

import DB from './database/dbconfig.js';
import cookieparser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import hotelRoutes from './routes/hotelRoutes.js';
import authRoutes from './routes/authRoutes.js';
import roomRoutes from './routes/roomRoutes.js';
import cors from "cors"
dotenv.config()
const app = express()

const PORT = process.env.PORT || 5000


//Database Connection 
DB.on('error', (err)=>{
    console.log(err)
})

DB.once('open',()=>{
    console.log("DB connected success");
})


app.use(cors());
app.use(cookieparser());
app.use(express.json());
app.use("/",userRoutes);
app.use("/",hotelRoutes);
app.use("/",authRoutes);
app.use("/",roomRoutes)
app.get("/",(req,res)=>{
    res.send("Hello From the server")
})

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });


app.listen(PORT,()=>{
    console.log(`Listening on Port ${PORT}`)
})