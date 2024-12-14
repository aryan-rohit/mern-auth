import express from 'express';
import { test } from '../controllers/user.controller.js';

const router=express.Router();

//method 1

// router.get('/',(req,res)=>{
//     res.json({
//         message:"API is working here too"
//     })
// });

router.get('/',test)


export default router;