import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'
//we need to add js as it is backend. since we used default while exporting we can give it a new name
dotenv.config();

mongoose.connect(process.env.MONGO)
        .then(()=>{
            console.log('Connected to MongoDB');
        })
        .catch((err)=>{
            console.log(err);
        })

const app=express();

app.listen(3000,()=>{
    console.log('Server Listening on port 3000')
})

// app.get('/',(req,res)=>{
//     res.json({
//         message:"API is Working",
//     })
// })

app.use("/api/user", userRoutes);