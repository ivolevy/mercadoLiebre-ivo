const path = require('path');

let controller = {
    register: (req, res) =>{
        res.sendFile(path.resolve(__dirname, '../views/register.html'))
    },
    registered: (req, res) =>{
        res.send('Ya te registraste campeon');
    },
    login: (req, res) =>{
        res.sendFile(path.resolve(__dirname, '../views/login.html'))
    },
    logued:  (req, res) =>{
        res.send('Ya te logueaste campeon');
    }
}

module.exports = controller;