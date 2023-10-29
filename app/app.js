import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import appRouter from '../routes/app.js';

const app = express();
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

export const rest = async () => {

    try {

        mongoose.connect(MONGO_URI, { useNewUrlParser : true, family : 4});
        const db = mongoose.connection;
    
        db.on('error', (err) => {
            console.log(err.message);
        });
    
        db.once('connected', () => {
            console.log(`DB Connected`);
            

    
        });

        app.use(express.json());

        app.use(appRouter);

        app.listen(PORT, '127.0.0.1', () => {
            console.log(`Connected on PORT = ${PORT}`);
        });
    
    } catch(err) {
    
        console.log(err.message);
    };

}