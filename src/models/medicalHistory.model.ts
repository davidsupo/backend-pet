import { model, Schema, Document } from 'mongoose';

export interface IMedicalHistory extends Document{
  createAt:Date
}

const medicalHistorySchema = new Schema({
  createAt:{
    type:Date,
    default: Date.now
  }
});

export default model<IMedicalHistory>('MedicalHistory',medicalHistorySchema);