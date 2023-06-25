const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM usuario ORDER BY id ASC', (error, results) => {
        if(error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM usuario WHERE id = $1', [id], (error, results) => {
        if(error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getEnunciadoQuestao = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM questao WHERE id = $1', [id], (error, results) => {
        if(error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

// const CreateUser = (request, response) => {
//     const { name, email } = request.body
//     pool.query('INSERT INTO usuario (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
//         if(error) {
//             throw error
//         }
//         response.status(201).send(`User added with ID: ${results.rows[0].id}`)
//     })
// }

module.exports = {
    getUsers,
    getUserById,
    getEnunciadoQuestao
}