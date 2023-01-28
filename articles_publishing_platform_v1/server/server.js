import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
const port = process.env.PORT || 3001;
import cors from 'cors';
import mongoose from 'mongoose';

// -- middlewares
app.use(express.json()).use(cors());

app.get('/', (req, res) => {
	res
		.status(200)
		.json({ message: 'welcome the articles pubishing platform api' });
});

app.listen(port, () => {
	console.log(`listening to port [${port}]`);
});
