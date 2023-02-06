import Article from '../../models/userArticleModel.js';

export default async function showOnlyOnePublicArticles(req, res) {
  const { public_article_id } = req.params;

  try {
    const article = await Article.findOne({
      article_is_public: true,
      article_id: public_article_id,
    })
      .sort({
        article_creation_date: -1,
      })
      .select({
        article_is_public: 0,
        article_user_publisher: 0,
        article_last_update: 0,
        user_id: 0,
        _id: 0,
        __v: 0,
      });
    res.status(200).json({ message: article });
    return;
  } catch (error) {
    res.status(400).json({ message: error.message });
    return;
  }
}
