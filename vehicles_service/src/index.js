import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors';
import vehiclesRouter from './routes/Vehicles.js';

dotenv.config();

const app = express()

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5054;

// app.use("/api/auth",authRoute)

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// mongoose.connect(process.env.MONGO_URL ,()=>{
//     console.log("DB Connected")
// })

app.use("/vehicles",vehiclesRouter)

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Your code here
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

app.listen(port, () => {
  console.log(`Vehicles Service listening on port ${port}`)
})

export {app} ;