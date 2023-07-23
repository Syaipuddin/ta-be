import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

export const rest = async () => {

    try {

        mongoose.connect(MONGO_URI, { useNewUrlParser : true});
        const db = mongoose.connection;
    
        db.on('error', (err) => {
            console.log(err.message);
        });
    
        db.once('connected', () => {
            console.log(`DB Connected`);
            
            app.use(express.json());

            app.listen(PORT, () => {
                console.log(`Connected on PORT = ${PORT}`);
            });
    
        });
    
    } catch(err) {
    
        console.log(err.message);
    };

}