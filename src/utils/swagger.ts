import { Express, Response as ExResponse, Request as ExRequest } from 'express'
import swaggerJSDoc, { Options } from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { version } from '../../package.json'

const swaggerOptions: Options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'REST API With PostgresSQL',
			version,
		},
	},
	apis: ['./src/swagger/*.documentation.*', './src/swagger/schemas/*'],
}
// './src/controllers/*.ts'

const swaggerSpec = swaggerJSDoc(swaggerOptions)

function swaggerDocs(app: Express, port: number) {
	//Swagger page
	app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

	//Docs in JSON
	app.get('/docs-json', (_req: ExRequest, res: ExResponse) => {
		res.json(swaggerSpec)
	})

	console.info(`Docs available at http://localhost:${port}/docs`)
}

export default swaggerDocs
