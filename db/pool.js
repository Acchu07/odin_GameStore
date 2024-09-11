import pg from 'pg'
import 'dotenv/config';
const { Pool } = pg

const connectionString = process.env.ConnectionString

export const poolOne = new Pool({
    connectionString,
    max: 20,
})