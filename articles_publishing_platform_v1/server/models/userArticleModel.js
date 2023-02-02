import mongoose, { Schema } from 'mongoose';

const articleSchema = new Schema({
	article_title: {
		type: String,
		required: true,
	},
	article_image: {
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
	user_id: {
		type: String,
	},
});
