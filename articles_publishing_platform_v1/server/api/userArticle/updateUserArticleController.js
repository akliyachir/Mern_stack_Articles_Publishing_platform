import Article from '../../models/userArticleModel.js'
import User from '../../models/userModel.js'
import jsonwebtoken from 'jsonwebtoken'

export default async function updateUserArticle(req, res) {
	const {
		article_title,
		article_image_url,
		article_image_height,
		article_body,
		article_body_shorten_for_card,
		article_is_public,
	} = req.body

	if (!article_title) {
		res.status(400).json({ message: "can't update an article without a title" })
		return
	}
	if (!article_body) {
		res.status(400).json({ message: "can't update an article without content" })
		return
	}

	const { authorization } = req.headers
	try {
		if (!authorization) {
			res.status(400).json({ message: 'make sure you are connected' })
			return
		}
		const token = JSON.parse(authorization).split(' ')[1]
		const { id } = jsonwebtoken.verify(token, process.env.NOT_A_SECRET)

		const user = await User.findOne({ _id: id })

		if (!user) {
			res.status(400).json({ message: 'not authorized' })
			return
		}

		const article = await Article.updateOne({
			...req.body,
			user_id: id,
			article_user_publisher: user.name,
		})

		res.status(200).json({ message: 'acticle created' })
	} catch (error) {
		console.error(error.message)
		res.status(400).json({ message: error.message })
	}
}
