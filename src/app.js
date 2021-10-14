const express = require('express');
const app = express();
const ejs = require('ejs')
const path = require('path');

// set the view engine to ejs
app.set('view engine', 'ejs');

/* config public */
app.use(express.static(path.resolve(__dirname, '../public')))



app.listen(process.env.PORT || 3000, function(){
    console.log('The server is running');
})
/* Routes , solo formularios van por POST, si lo especificamos*/
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const mainRouter = require('./routes/main');
app.use('/', mainRouter);

