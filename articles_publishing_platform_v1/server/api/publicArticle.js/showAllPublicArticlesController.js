import Article from '../../models/userArticleModel.js';

export default async function showAllPublicArticles(req, res) {
  try {
    const articles = await Article.find({ article_is_public: true })
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
    res.status(200).json({ message: articles });
    return;
  } catch (error) {
    res.status(400).json({ message: error.message });
    return;
  }
}

/*

				article_is_public: 0,
				article_user_publisher: 0,
				article_last_update: 0,
				user_id: 0,
				_id: 0,
				__v: 0,
    
    article_title: {
     article_image_url: {
      article_body: {
       article_creation_date: {
   article_id: {


*/
