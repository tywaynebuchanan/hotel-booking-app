import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()
import { createError } from './error.js';

console.log(process.env.SECRET)
export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token
   if(!token){
    return next(createError(400,"You are not authenicated"));
   }

   jwt.verify(token,process.env.SECRET,(err,user)=>{
    if(err) return next(createError(400,"Token is not valid"));
        req.user = user;
        next()
   });

}

export const verifyUser = (req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            return next(createError(403,"User not verified"))
            
        }
    })
}

export const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.isAdmin){
            next();
        }else{
            return next(createError(403,"User not authorized"))
            
        }
    })
}

