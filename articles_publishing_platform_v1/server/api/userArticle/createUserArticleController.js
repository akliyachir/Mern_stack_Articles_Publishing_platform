import Article from '../../models/userArticleModel.js';

const createUserArticle = async (req, res) => {
	const { article_title, article_body, user_id } = req.body;
	const { authorization } = req.headers;
	try {
		if (!authorization) {
			res.status(400).json({ message: 'make sure you are connected' });
			return;
		}
		const token = JSON.parse(authorization).split(' ')[1];
		const { id } = jsonwebtoken.verify(token, process.env.NOT_A_SECRET);

		const articles = await Article.find({ _id: id });
		res.status(200).json({ message: articles });
	} catch (error) {
		console.error(error.message);
		res.status(400).json({ message: error.message });
	}
};

export { createUserArticle };
