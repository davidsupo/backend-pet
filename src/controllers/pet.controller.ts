import {Request, Response} from 'express';
import Pet from '../models/pet.model';

export const registerPet = async (req:Request,res:Response)=>{
  try{
    const newPet = new Pet(req.body);
    await newPet.save();
    return res.status(201).json(newPet);
  }catch(error){
    return res.status(500).json(error);
  }
}

export const updatePet = async (req:Request, res:Response)=>{
  try{
    const pet = await Pet.findById(req.params.id);
    if(!pet || pet.disabled) return res.status(404).json({message:'Pet not found with ID: ' + req.params.id});
    const updatePet = await Pet.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(201).json(updatePet);
  }catch(error){
    return res.status(500).json(error);
  }
}

export const getPet = async (req:Request, res:Response)=>{
  try{
    const pet = await Pet.findById(req.params.id).populate({path:'owners',match:{disabled:false}});
    if(!pet || pet.disabled) return res.status(404).json({message:'Pet not found with ID: ' + req.params.id});
    return res.status(200).json(pet);
  }catch(error){
    return res.status(500).json(error);
  }
}