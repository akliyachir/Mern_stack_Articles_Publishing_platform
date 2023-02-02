import Article from '../../models/userArticleModel.js';
import User from '../../models/userModel.js';
import jsonwebtoken from 'jsonwebtoken';

const getUserArticles = async (req, res) => {
	const { authorization } = req.headers;
	try {
		if (!authorization) {
			res.status(400).json({ message: 'make sure you are connected' });
			return;
		}
		const token = JSON.parse(authorization).split(' ')[1];
		const result = jsonwebtoken.verify(token, process.env.NOT_A_SECRET);
		res.status(200).json({ message: result });
	} catch (error) {
		console.error(error.message);
		res.status(400).json({ message: error.message });
	}
};

export { getUserArticles };
