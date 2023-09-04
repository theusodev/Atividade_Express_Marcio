const express = require('express')
const app = express()

const path = require('path')
const caminho = path.join(__dirname, 'templates')

app.use(express.static('public'))

app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.sendFile(`${caminho}/index.html`)
})

app.get('/usuario/login', (req, res) => {
    res.sendFile(path.join(caminho, 'login.html'))
})

app.post('/usuario/salvar', (req, res) => {
    const nome = req.body.nome
    const codigo = req.body.codigo

    console.log(`
        Nome: ${nome}
        CPF: ${codigo}
    `)

    res.redirect('/')
})

app.use(express.json())

app.listen(5000)