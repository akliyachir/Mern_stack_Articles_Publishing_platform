import mongoose, { Schema } from 'mongoose';

const articleSchema = new Schema({
	article_title: {
		type: String,
		required: true,
	},
	article_image_url: {
		type: String,
	},
	article_body: {
		type: String,
		required: true,
	},
	article_creation_date: {
		type: Date,
		default: Date.now,
	},

	article_last_update: {
		type: Date,
	},

	user_id: {
		type: String,
	},
});

const Article = mongoose.model('Article', articleSchema);

export default Article;

/* 

	article_title
	article_image
	article_body
	article_creation_date
	user_id

*/
