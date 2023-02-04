import Article from '../../models/userArticleModel.js';
import User from '../../models/userModel.js';
import jsonwebtoken from 'jsonwebtoken';

const getOneUserArticleController = async (req, res) => {
  const { authorization } = req.headers;
  const { user_article_id } = req.params;
  console.log(req.params);
  try {
    if (!authorization) {
      res.status(400).json({ message: 'make sure you are connected' });
      return;
    }
    const token = JSON.parse(authorization).split(' ')[1];
    const { id } = jsonwebtoken.verify(token, process.env.NOT_A_SECRET);
    const user = await User.findOne({ _id: id, article_id: user_article_id });
    if (!user) {
      res.status(400).json({ message: 'no way!' });
      return;
    }
    const articles = await Article.findOne({
      user_id: id,
      article_id: user_article_id,
    })
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
    });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: error.message });
  }
};

export default getOneUserArticleController;
