import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import passport from 'passport';

import passportMiddleware from './middlewares/passport';
import authRoutes from './routes/auth.routes';
import petRoutes from './routes/pet.routes';

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);

// Routes
app.use('/api/v1',authRoutes);
app.use('/api/v1',petRoutes);

export default app;