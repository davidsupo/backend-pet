import { model, Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends Document{
  email: string,
  password: string,
  name:string,
  lastname:string,
  dni:string,
  birth:Date,
  phone:string,
  rol:string,
  codeVet:string,
  vet:string,
  coords:Coords,
  imgUrl:string,
  disabled:boolean,
  createAt:Date,
  disabledAt:Date,
  comparePassword: (password:string)=>Promise<boolean>
}

interface Coords {
  lat:string,
  long:string
}

const userSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  lastname:{
    type:String,
    required:true
  },
  dni:{
    type:String,
    required:false
  },
  birth:{
    type:Date,
    required:true
  },
  phone:{
    type:String,
    required:true
  },
  rol:{
    type:String,
    default:'USER',
    enum:['USER','ADMIN','VET','VET_OWNER']
  },
  codeVet:{
    type:String
  },
  vet:{
    type:Schema.Types.ObjectId,
    ref:'Vet'
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true
  },
  password:{
    type: String,
  },
  coords:{long:String,lat:String},
  imgUrl:{
    type:String
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
});

userSchema.pre<IUser>('save',async function(next){
  const user = this;
  if(!user.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  next();
});

userSchema.methods.comparePassword = async function(password:string):Promise<boolean>{
  return await bcrypt.compare(password,this.password);
}

export default model<IUser>('User',userSchema);