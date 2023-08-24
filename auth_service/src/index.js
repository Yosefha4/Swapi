import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import authRoute from './routes/authRoute.js';
import cors from 'cors';

dotenv.config();

const app = express()

app.use(express.json());
app.use(cors());


const port = process.env.PORT || 8082;

app.use("/api/auth",authRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose.connect(process.env.MONGO_URL ,()=>{
    console.log("DB Connected")
})

app.listen(port, () => {
  console.log(`Auth Service listening on port ${port}`)
})

export {app} ;