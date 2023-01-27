
import User from '../models/userModels.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createError } from '../utils/error.js';

export const getUsers = async (req,res,next)=>{
    
    try {
        const users = await User.find();
        res.status(200).json({
            status: "success",
            NoUsers: users.length,
            data:{
                users
            }
        })
    } catch (error) {
        res.status(401).json({
            status:"failed",
            message:"Unable to get users"
        })
    }
    
};

export const register = async(req,res,next)=>{
    try {
       const {username,email,name,password} = req.body
       const hashedpassword = await bcrypt.hash(password, 10);
        const newuser = await User.create({
            username: username,
            email: email,
            name: name,
            password: hashedpassword
            
        })
        res.status(200).json({
            status: "success",
            message: "The user was created",
            data:{
                newuser
            }
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Unable to create user at this time"
        })
    }
};

export const login = async (req,res,next)=>{
    try {
        const {email,password} = req.body
        const user = await User.findOne({email}).select('+password')

        if(!user){
            return next(createError(400,"User not found"))
        }
        
        const isPassword = await bcrypt.compare(password,user.password)

        if(!isPassword){
            return next(createError(400,"Password is incorrect"))
        }
       
        const token = jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.SECRET)

        const {isAdmin, ...otherDetails } = user._doc;

        res.cookie("access_token",token,{httpOnly: true,}).status(200).json({
            details: { ...otherDetails }, isAdmin
        })
    } catch (error) {
       next(error) 
    }
};

export const getUserById = async(req,res,next)=>{
    try {
        const user = await User.findById(req.params.id)
        
        if(!user){
            return next (createError(400,"Unable to find user by Id"))
        }

        res.status(200).json({
            status: "success",
            data:{
                user
            }
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Unable to get user by Id"
        })
    }
};
