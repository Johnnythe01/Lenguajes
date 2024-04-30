const express = require('express')
const db = require('better-sqlite3')('personas.sqlite')

const app = express()
const port = 3000

app.use(express.json());

app.get('/patata', (req, res) => {
    res.send('Hello World!')
})

app.get('/personas', (req, res) => {
    const rows = db.prepare('SELECT * from personas').all();
    res.json(rows)
})

app.get("/persona", (req, res) => {
    personaId = req.query.id;
    console.log(typeof (personaId));
    const row = db.prepare('SELECT * from personas WHERE id = ?').get(personaId);
    res.json(row)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/usuarios', (req, res) => {
    const rows = db.prepare('SELECT * from usuarios').all();
    res.json(rows)
})

app.get('/productos', (req, res) => {
    const rows = db.prepare('SELECT * from productos').all();
    res.json(rows)
})

app.get('/comandas', (req, res) => {
    const rows = db.prepare('SELECT * from comandas').all();
    res.json(rows)
})