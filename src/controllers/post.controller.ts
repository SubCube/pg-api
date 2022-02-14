import { Request as ExRequest, Response as ExResponse } from 'express'
import pool from '../db/pool'

export interface CreatePostResponse {
	title: string
	description: string
	image: string
	id: number
}

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
	static async getPost(req: ExRequest, res: ExResponse) {
		const id = req.params.id
		const post = await pool.query(`SELECT * FROM post WHERE id = $1`, [id])
		res.json(post.rows[0])
	}
	static async updatePost(req: ExRequest, res: ExResponse) {
		const { title, description, image, id }: CreatePostResponse = req.body
		const updatedPost = await pool.query(
			`UPDATE post SET title = $1, description = $2, image = $3 WHERE id = $4 RETURNING *`,
			[title, description, image, id]
		)
		res.json(updatedPost.rows[0])
	}
	static async deletePost(req: ExRequest, res: ExResponse) {
		const id = req.params.id
		const post = await pool.query(`DELETE FROM post WHERE id = $1  RETURNING *`, [id])
		res.json(post.rows[0])
	}
}
