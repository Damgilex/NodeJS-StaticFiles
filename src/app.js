const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();//Aplicacion express

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../Templates/views');
const partialsPath = path.join(__dirname,'../Templates/partials');

//Setup handlebars engine and views location
app.set('view engine','hbs');//Setting por defecto buscara la carpeta Views
app.set('views',viewsPath);
console.log(partialsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('',(req,res)=>{
    res.render('index',{
        title:'Inicio',
        name:'Alejandro'
    });
});

app.get('/about',(req,res)=>{
    res.render("about",{
        title:'about',
        name:'about name'
    });
})//Que hara el servidor cuando se trate acceder a una ruta

app.get('/about/*',(req,res)=>{
    res.send('does not existe')
})

app.get('/products',(req,res)=>{
    console.log(req.query);
    res.send('holi')
})

app.get('*',(req,res)=>{//Para rutas inexistentes
    res.render('404',{
        errorMessage:'Page not found',
        title:'404'
    })
})


app.listen(3000,()=>{
    console.log('Server is up on port 3000');
})//Inicia el servidor

