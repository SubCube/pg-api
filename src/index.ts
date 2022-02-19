import express, { Response as ExResponse, Request as ExRequest } from 'express'
import { PostController } from './controllers/post.controller'
import swaggerDocs from './utils/swagger'
import cors from 'cors'

export const app = express()

app.listen(5000, () => {
	console.log('Server has been started on port 5000, http://localhost:5000')
	swaggerDocs(app, 5000)
})

const allowedOrigins = ['http://localhost:3000']

const options: cors.CorsOptions = {
	origin: allowedOrigins,
}

app.use(express.json())
app.use(cors(options))

app.get('/', (_req: ExRequest, res: ExResponse) => {
	res.json({
		version: '0.0.1',
		components: ['express', 'pg', 'typescript'],
		author: 'Maksim Belfer',
		description: 'REST API',
	})
})

app.get('/posts', PostController.getPosts)
app.post('/post', PostController.createPost)
app.get('/post/:id', PostController.getPost)
app.put('/post', PostController.updatePost)
app.delete('/post/:id', PostController.deletePost)
