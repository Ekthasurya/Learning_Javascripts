const express = require('express');
const UserModel = require("../model/user.model")
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')

const userRouter = express.Router()

userRouter.post('/register', async(req,res)=>{
    const{name,email,password,role}=req.body;
    try {
        bcrypt.hash(password,5,async function(err,hash){
            if(err){
                res.status(500).json({
                    message:"Error occured during hashing of password"
                })
            }else{
                const user = new UserModel({
                    name,
                    email,
                    password:hash,
                    role
                })
                await user.save()
        res.status(201).json({
            message:"user registered successfully"
        })
            }
        })
       
        
    } catch (error) {
       res.status(500).json({
        message:"Error occured during creation of user"
       }) 
    }
})


userRouter.post('/login', async(req,res)=>{
    const{email,password}= req.body;
    try {
        const user = await UserModel.findOne({email,password})
        if(!user){
           return   res.status(400).json({
                message:"User is not found"
            })
        }

        if(user){
            bcrypt.compare(password, user.password, function(err, result){
                if(result){
                    const token = jwt.sign(
                        {id:user._id},
                        process.env.jwt_SECRET_KEY,
                    );
                    
                    res.status(201).json({
                        message:"user logged in successfully",
                        token
                    })
                }else{
                    res.status(400).json({
                        message:"Worng Password"
                    })
                }
            })
        }
        
    } catch (error) {
       res.status(500).json({
        message:"Error occured during login"
       }) 
    }
})




module.exports = userRouter