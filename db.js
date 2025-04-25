const { Pool } = require('pg')
require('dotenv').config();

/*const pool = new Pool({
  user: 'students_fqe5_user',
  host: 'cvi01adrie7s73ebi45g-a.oregon-postgres.render.com',
  database: 'students_fqe5',
  password: 'Rqur05qinOVXKi1EEbi3wE8XOAHczozY',
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
}) Expired Database*/

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: parseInt(process.env.PG_PORT, 10),
  ssl: {
    rejectUnauthorized: process.env.PG_SSL_REJECT_UNAUTHORIZED === 'true',
  },
});

pool.on('connect', () => {
  console.log('Successfully connected to the database')
})

pool.on('error', (err) => {
  console.error('Database error:', err.stack)
})

module.exports = pool
