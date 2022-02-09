import { Pool } from 'pg'

const pool = new Pool({
	user: undefined,
	database: undefined,
	port: undefined,
	host: undefined,
})

module.exports = pool
