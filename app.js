const express = require('express');
const app = express();
const path = require('path');

/* config public */
app.use(express.static(path.resolve(__dirname, 'public')))

app.listen(process.envı || 3000, function(){
    console.log('The server is running');
})
//npx nodemon
/* Routes , solo formularios van por POST, si lo especificamos*/

app.get('/', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})

app.get('/register', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})
app.get('/register', (req,res) =>{
    res.send(path.resolve('ya te registraste!'));
})

app.get('/login', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './views/login.html'));
})
app.get('/login', (req,res) =>{
    res.send(path.resolve('Ya te logueaste!'));
})

