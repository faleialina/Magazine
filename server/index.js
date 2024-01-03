import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;
const DB_NAME = process.env.DB_NAME;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
   return res.json({ message: 'All is fine.' })
})

async function start() {
    try {
        await mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`)
        app.listen(PORT, () => { console.log(`Server started on port: ${PORT}`) });
    } catch (error) {
        console.log(error);
    }
}

start();
