import Article from '../../models/userArticleModel.js';

const createUserArticle = async (req, res) => {
	const { article_title, article_body, user_id } = req.body;

	if (!article_title) {
		res.status(400).json({ message: "can't create an article without a title" });
	}
	if (!article_body) {
		res.status(400).json({ message: "can't create an article without content" });
	}

	const { authorization } = req.headers;
	try {
		if (!authorization) {
			res.status(400).json({ message: 'make sure you are connected' });
			return;
		}
		const token = JSON.parse(authorization).split(' ')[1];
		const { id } = jsonwebtoken.verify(token, process.env.NOT_A_SECRET);

		const article = await article.create({ ...req.body, user_id: id });

		res.status(200).json({ message: article });
	} catch (error) {
		console.error(error.message);
		res.status(400).json({ message: error.message });
	}
};

export { createUserArticle };
