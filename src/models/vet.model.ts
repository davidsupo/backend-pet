import { model, Schema, Document } from 'mongoose';

export interface IVet extends Document{
  comercialName:string,
  ruc:string,
  address:string,
  phone:string[],
  owner:string,
  disabled:boolean,
  createAt:Date,
  disabledAt:Date
}

const vetSchema = new Schema({
  comercialName:{
    type:String,
    required:true
  },
  ruc:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  phone:{
    type:[String]
  },
  owner:{
    type:Schema.Types.ObjectId,
    ref:'User',
    required:true
  },
  disabled:{
    type:Boolean,
    default:false
  },
  createAt:{
    type:Date,
    default: Date.now
  },
  disabledAt:{
    type:Date
  }
})

export default model<IVet>('Vet',vetSchema);