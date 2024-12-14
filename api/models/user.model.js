import mongoose from 'mongoose';

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    profilePicture:{
        type:String,
        default:"https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg",
    },
},{timestamps:true});

const User=mongoose.model('User',userSchema);

export default User;