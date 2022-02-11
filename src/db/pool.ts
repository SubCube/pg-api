import { Pool } from 'pg'

const pool = new Pool({
	user: 'maksimbelfer',
	database: 'rest_api',
	port: 5432,
	host: 'localhost',
})

export default pool
