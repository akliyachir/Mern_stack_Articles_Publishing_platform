import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
const port = process.env.PORT || 3001;
import cors from 'cors';
import mongoose from 'mongoose';
mongoose.set('strictQuery', true);
//-- routes import
import userRoutes from './api/user/userRoutes.js';
// -- middlewares
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'welcome the articles pubishing platform api' });
});

//-- routes
app.use('/user', userRoutes);

mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`listening to port [${port}]`);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });
