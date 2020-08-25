import {Request,Response} from 'express';
import Vet from '../models/vet.model';

export const registerVet = async (req:Request, res:Response)=>{
  try{
    const newVet = new Vet(req.body);
    await newVet.save();
    return res.status(201).json(newVet);
  }catch(error){
    return res.status(500).json(error);
  }
}

export const getVets = async (req:Request, res:Response)=>{
  try{
    const vets = Vet.find();
    return res.status(200).json(vets);
  }catch(error){
    return res.status(500).json(error);
  }
}

