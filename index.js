const express = require('express');
const { create } = require("express-handlebars");
const jquery = require('jquery');

const app = express();

const hbs = create({
    extname: ".hbs",
    partialsDir: ["views/components"],
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs"); 
app.set("views", "./views");

// Middleware bootstrap y jquery
app.use('/bootstrap', express.static(__dirname +
    '/node_modules/bootstrap/dist/css'))

app.use('/jquery', express.static(__dirname +
    '/node_modules/jquery/dist'))
        
app.get("/", (req, res) => {   
    res.render('Dashboard');    
})

app.get("/", (req, res) => {
    res.render("Carrito", { layout: "mercado"})
})

app.use(express.static(__dirname + "/public"));  

app.listen(5000, () =>  console.log('servidor andando en puerto 5000😁')); 