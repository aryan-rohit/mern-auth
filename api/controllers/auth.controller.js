import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
export const signup= async (req,res)=>{
    // console.log(req.body);
    const {username,email,password}=req.body;
    const hashedPassword=bcryptjs.hashSync(password,10); //number of round for salt 10
    const newUser= new User({username,email,password:hashedPassword});  //username:username  no need as same key value
    try{
        await newUser.save();
        res.status(201).json({message:"User created succesfully"});
    }
    catch(error){
        res.status(500).json(error.message);
    }
    


};