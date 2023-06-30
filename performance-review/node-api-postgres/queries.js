const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
})

// const getUsers = (request, response) => {
//     pool.query('SELECT * FROM usuario ORDER BY id ASC', (error, results) => {
//         if(error) {
//             throw error
//         }
//         response.status(200).json(results.rows)
//     })
// }

const getUsers = async (request, response) => {
    const result = await pool.query('SELECT * FROM usuario ORDER BY id ASC')
    console.log(result)
    response.status(200).json(result.rows)
} 

const getUserById = async (request, response) => {
    const id = parseInt(request.params.id)
    const result = await pool.query(`SELECT * FROM usuario WHERE id = ${id}`)
    response.status(200).json(result.rows)
}

const getEnunciadoQuestao = async (request, response) => {
    const id = parseInt(request.params.id)
    const questao = await pool.query(`SELECT * FROM questao q WHERE q.id = ${id}`)
    response.status(200).json(questao.rows)
}

// const getQuestaoPorPerfil = (request, response) => {
//     const idPerfil = parseInt(request.params.idPerfil)
//     pool.query(`select q.enunciado from questao q where q.id between 1 and (select p.qtd_questoes from perfil p where id = ${idPerfil})`,
//         (error, results) => {
//             if (error) {
//                 throw error
//             }
//             response.status(200).json(results.rows)
//         })
// //     pool.query(`select c.nome from conceito c `,
// //     (error, results) => {
// //         if (error) {
// //             throw error
// //         }
// //         response.status(200).json(results.rows)
// //     })
// }

const getQuestaoPorPerfil = async (request, response) => {
    const idPerfil = parseInt(request.params.idPerfil)
    const enunciados = await pool.query(`select * from questao q where q.id between 1 and (select p.qtd_questoes from perfil p where id = ${idPerfil})`)
    const opcoes = await pool.query(`select * from conceito c`)
    const result = enunciados.rows.map( enunciado => {
        let newItem = {...enunciado, opt:opcoes.rows}
        return newItem
    })
//     pool.query(`select c.nome from conceito c `,
//     (error, results) => {
//         if (error) {
//             throw error
//         }
//         response.status(200).json(results.rows)
//     })
    response.status(200).json(result)
}

const setRespostaQuestao = (request, response) => {
    const { conceito_id, avaliacao_id, questao_id, observacao } = request.body
    pool.query('INSERT INTO resposta (conceito_id, avaliacao_id, questao_id, observacao) VALUES ($1, $2, $3, $4)',
        [conceito_id, avaliacao_id, questao_id, observacao],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(201).send(`Resposta added with ID: ${results.rows[0].id}`)
        })
}

const insertResposta = async (request, response) => {
    try {
        const { conceito_id, avaliacao_id, questao_id, observacao } = request.body
        const result = await pool.query(`INSERT INTO resposta (conceito_id, avaliacao_id, questao_id, observacao) 
                                                VALUES (${conceito_id}, ${avaliacao_id}, ${questao_id}, ${observacao})`)
        response.status(201).send(`Resposta added with ID: ${result.rows}`)
    } catch (error) {
        console.log(error)
        } 
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
    getEnunciadoQuestao,
    setRespostaQuestao,
    getQuestaoPorPerfil,
    insertResposta
}