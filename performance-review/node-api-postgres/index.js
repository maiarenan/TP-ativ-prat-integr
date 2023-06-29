const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries') 
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.get('/questao/:id', db.getEnunciadoQuestao)
app.get('/questoes/:idPerfil', db.getQuestaoPorPerfil)

app.listen(port, () => {
console.log(`App running on port ${port}.`)
})