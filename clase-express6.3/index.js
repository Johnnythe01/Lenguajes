const express = require('express')
const db = require('better-sqlite3')('personas.sqlite')

const app = express()
const port = 3000

// Crearemos la configuracion de la base de datos

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index", { msgs: ["Hola", "desde", "la", "ruta"] });
})

// app.get('/vistausuarios', (req, res) => {
//     const rows = db.prepare('SELECT * from usuarios').all();
//     res.render("index", { msgs: rows })
// })

// Devolveremos el render de la vista con un form
app.get('/usuarios', (req, res) => {
    const usuarios = db.prepare('SELECT * from usuarios').all();
    res.render('usuarios', { usuarios: usuarios });
})

app.get('/usuarioDetalle', (req, res) => {
    id = req.query.id;
    console.log(req.query);
    const usuario = db.prepare('SELECT * from usuarios where id = ?').get(id);
    res.render("usuarioDetalle", { usuario: usuario });
})

app.get('/usuario', (req, res) => {
    res.render("usuario");
})

// Capturaremos el submit del form
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
    resultadoSelect = 'SELECT * from Productes'
    const productos = db.prepare('SELECT * from productos').all();
    res.render('productos', { productos: productos })
})
app.get('/producto', (req, res) => {
    res.render("producto");
})

// Capturaremos el submit del form
app.post("/producto", (req, res) => {
    console.log(req.body);
    if (req.body.nombre && req.body.precio) {
        // Insert
        const statement = db.prepare("INSERT INTO productos (nombre, precio) VALUES (?, ?)")
        const info = statement.run(req.body.nombre, req.body.precio);
        console.log(info);
    }
    res.redirect("producto");
})

// Creamos el apartado de detalles de producto
app.get('/productoDetalle', (req, res) => {
    id = req.query.id;
    console.log(req.query);
    const producto = db.prepare('SELECT * from productos where id = ?').get(id);
    res.render("productoDetalle", { producto: producto });
})

app.get('/comandas', (req, res) => {
    const comandas = db.prepare('SELECT * from comandas').all();
    res.render('comandas', { comandas: comandas });
})

app.get('/comanda', (req, res) =>{
    // Select de usuarios y Productos
    const usuarios = db.prepare('SELECT * from Usuarios').all()
    const productos = db.prepare('SELECT * from Productos').all()
    res.render("comanda", {usuaris: usuarios, productes: productos});
  })

  app.post('/comanda', (req, res) => {
    if (req.body) {
      console.log(req.body);
      if (req.body.usuari_id && req.body.producte_id) {
        //insert
        const statement = db.prepare('INSERT INTO Comandas (usuario_id, producto_id) VALUES (?,?)')
        const info = statement.run(req.body.usuari_id, req.body.producte_id)
        console.log(info)
      }
    }})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// creo que esto no sirve ya


// app.get('/usuarios', (req, res) => {
//     const rows = db.prepare('SELECT * from usuarios').all();
//     res.json(rows)
// })

// app.get('/productos', (req, res) => {
//     const rows = db.prepare('SELECT * from productos').all();
//     res.json(rows)
// })

// app.get('/comandas', (req, res) => {
//     const rows = db.prepare('SELECT * from comandas').all();
//     res.json(rows)
// })