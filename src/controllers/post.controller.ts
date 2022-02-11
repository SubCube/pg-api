import { Request as ExRequest, Response as ExResponse } from 'express'
import pool from '../db/pool'

export class PostController {
	static async createPost(req: ExRequest, res: ExResponse) {
		const { title, description, image }: { title: string; description: string; image: string } = req.body

		const newPost = await pool.query(`INSERT INTO post (title, description, image) values ($1, $2, $3) RETURNING *`, [
			title,
			description,
			image,
		])
		res.json(newPost.rows[0])
	}
	static async getPosts(_req: ExRequest, res: ExResponse) {
		const list = await pool.query(`SELECT * FROM post`)
		res.json(list.rows)
	}
	static async getPost(req: ExRequest, res: ExResponse) {}
	static async updatePost(req: ExRequest, res: ExResponse) {}
	static async deletePost(req: ExRequest, res: ExResponse) {}
}
