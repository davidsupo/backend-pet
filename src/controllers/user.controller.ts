import { Request, Response } from 'express';
import User, {IUser} from '../models/user.model';
import jwt from 'jsonwebtoken';
import config from '../config/config';

function createToken(user:IUser){
  return jwt.sign({id:user.id, email:user.email},config.jwtSecret,{
    expiresIn: 86400
  });
}

export const signUp = async (req: Request,res: Response)=>{
  try{
    const newUser = new User(req.body);
    await newUser.save();
    newUser.password = '';
    return res.status(201).json(newUser);
  }catch(error){
    return res.status(500).json(error);
  }
}


export const updateUser = async(req:Request, res:Response)=>{
  try{
    const user = await User.findById(req.params.id);
    if(!user || user.disabled) return res.status(404).json({message:'User not found with ID: ' + req.params.id});
    const updateUser = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(201).json(updateUser);
  }catch(error){
    return res.status(500).json(error);
  }
}

export const signIn = async (req: Request, res: Response)=>{
  if(!req.body.email || !req.body.password){
    return res.status(400).json({message:'Please. Send your email and password'});
  }
  const user = await User.findOne({email: req.body.email});
  if(!user){
    return res.status(400).json({message:'The user does not exists'});
  }
  const isMatch = await user.comparePassword(req.body.password);
  if(isMatch){
    return res.status(200).json({token:createToken(user)});
  }
  return res.status(400).json({message:'Email or password are incorrect'});
}