import mongoose from 'mongoose';
import config from './config/config';

mongoose.connect(config.DB.URI,{useUnifiedTopology:true,useNewUrlParser:true,useCreateIndex:true});

const connection = mongoose.connection;

connection.once('open',()=>{
  console.log('Mongodb connection stablished');
});

connection.on('error', err =>{
  console.log(err);
  process.exit(0);
});