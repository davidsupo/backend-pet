import { model, Schema, Document } from 'mongoose';

export interface IPet extends Document{
  avatar:string,
  name:string,
  specie:string,
  breed:string,
  gender:string,
  color:string,
  birth:Date,
  features:string[],
  origin:string,
  owners:string[],
  medicalHistory:string,
  disabled:boolean,
  createAt:Date,
  disabledAt:Date
}

const petSchema = new Schema({
  avatar:{
    type:String
  },
  name:{
    type:String,
    required:true
  },
  specie:{
    type:String,
    required:true
  },
  breed:{
    type:String,
    required:true
  },
  gender:{
    type:String,
    required:true,
    enum:['MACHO','HEMBRA']
  },
  color:{
    type:String,
    required:true
  },
  birth: {
    type:Date,
    required:true
  },
  features:{
    type:[String],
    required:false
  },
  origin:{
    type:String,
    required:true,
    enum:['ADOPTADO','PROPIO','RESCATADO']
  },
  owners:[{type:Schema.Types.ObjectId,ref:'User'}],
  medicalHistory:{
    type:Schema.Types.ObjectId,
    ref:'MedicalHistory',
    required:false
  },
  disabled:{
    type:Boolean,
    default:false
  },
  createAt:{
    type:Date,
    default:Date.now
  },
  disabledAt:{
    type:Date
  }
});

export default model<IPet>('Pet',petSchema);