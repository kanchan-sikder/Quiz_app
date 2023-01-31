const Pool = require('pg').Pool;

const pool =new Pool({
    user: 'postgres',
    password: 'Kanica sikder',
    database: 'quiz_db',
    host: 'localhost',
    port:5432
});

module.exports =pool;