import mongoose, { Schema } from 'mongoose';

const articleSchema = new Schema({
  article_title: {
    type: String,
    required: true,
  },
  article_image_url: {
    type: String,
  },
  article_image_height: {
    type: Number,
    default: 50,
  },
  article_body: {
    type: String,
    required: true,
  },
  article_body_shorten_for_card: {
    type: String,
    required: true,
  },
  article_is_public: {
    type: Boolean,
    default: true,
  },
  article_creation_date: {
    type: Date,
    default: Date.now,
  },
  article_user_publisher: {
    type: String,
  },
  article_last_update: {
    type: Date,
  },
  article_id: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
  },
});

const Article = mongoose.model('Article', articleSchema);

export default Article;

/* 


  article_title: {
  article_image_url: {
  article_body: {
  article_is_public: {
  article_creation_date: {
  article_user_publisher: {
  article_last_update: {
  article_id: {
  user_id: {



article_title,
article_image_url,
article_body,
article_creation_date,
article_id,

{article_creation_date: 0,},
{article_last_update:0,},
{article_id:0,},
{_id:0},

*/
