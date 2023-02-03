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
    const { id } = jsonwebtoken.verify(token, process.env.NOT_A_SECRET);
    const user = await User.findOne({ _id: id });
    if (!user) {
      res.status(400).json({ message: 'no way!' });
      return;
    }
    const articles = await Article.find({ user_id: id })
      .sort({
        article_creation_date: -1,
      })
      .select({
        user_id: 0,
        _id: 0,
        __v: 0,
      });

    res.status(200).json({
      message: articles,
      user: user.email,
    });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: error.message });
  }
};

export { getUserArticles };
