const express = require('express');
const app = express();
const path = require('path');

/* config public */
app.use(express.static(path.resolve(__dirname, 'public')))

app.listen(process.env.PORT || 3000, function(){
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
app.post('/register', (req,res)=> {
    res.send('Ya te registraste campeón');
});

app.get('/login', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './views/login.html'));
})
app.post('/login', (req,res) =>{
    res.send(path.resolve('Ya te logueaste!'));
})

