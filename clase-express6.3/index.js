const express = require('express')
const db = require('better-sqlite3')('personas.sqlite')

const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", msgs = { msgs: ["Hola", "desde", "la", "ruta"] });
})

app.get('/vistausuarios', (req, res) => {
    const rows = db.prepare('SELECT * from usuarios').all();
    res.render("index", msgs = { msgs: rows })
})

// devolveremos el render de la vista con un form
app.get('/usuarios', (req, res) => {
    const usuarios = db.prepare('SELECT * from usuarios').all();
    res.render('usuarios', { usuarios: usuarios });
})

app.get('/comandas', (req, res) => {
    const comandas = db.prepare('SELECT * from comandas').all();
    res.render('comandas', { comandas: comandas });
})

app.get('/usuario', (req, res) =>{
    res.render("usuario");
})

//capturaremos el submit del form
app.post("/usuario", (req, res) => {
    console.log(req.body);
    if (req.body.nombre && req.body.email) {
        //insert
        const statement = db.prepare("INSERT INTO usuarios (nombre, email) VALUES (?, ?)")
        const info = statement.run(req.body.nombre, req.body.email);
        console.log(info);
    }
    res.redirect("usuario");
})

app.get('/productos', (req, res) => {
    const rows = db.prepare('SELECT * from productos').all();
    res.render('productos',  productos = rows )
})

//capturaremos el submit del form
app.post("/producto", (req, res) => {
    console.log(req.body);
    if (req.body.nombre && req.body.precio) {
        //insert
        const statement = db.prepare("INSERT INTO productos (nombre, precio) VALUES (?, ?)")
        const info = statement.run(req.body.nombre, req.body.precio);
        console.log(info);
    }
    res.redirect("producto");
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

