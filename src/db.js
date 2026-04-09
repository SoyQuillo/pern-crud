import {Pool} from "pg";

const db = new Pool({
    user: 'postgres',
    password: '12345',
    host: 'localhost',
    port: 5432,
    database: 'taskdb'
})

export default db