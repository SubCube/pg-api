import express, { Response as ExResponse, Request as ExRequest } from 'express'

export const app = express()
app.listen(5000, () => {
	console.log('Server has been started on port 5000, http://localhost:5000')
})

app.get('/', (_req: ExRequest, res: ExResponse) => {
	res.json({
		version: '0.0.1',
		components: ['express', 'pg', 'typescript'],
		author: 'Maksim Belfer',
		description: 'REST API',
	})
})
