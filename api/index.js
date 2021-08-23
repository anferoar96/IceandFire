const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cron=require('./src/cron')
const cors = require('cors');
const db=require('./src/config/database')

//Initizalization
const app=express();
app.use(cors());

//Settings
app.set('port', process.env.port || 4000);

app.use(morgan('dev'));
app.use(express.json());

// Global variables
global.urlice='https://anapioficeandfire.com/api/characters/'
//Routes
app.use(require('./src/routes/routes'));



//Database
db.authenticate()
    .then(()=>console.log("Database connected"))
    .catch(err=>console.log("Error "+err))

//Starting server
app.listen(app.get('port'),()=>{
    //cron.everyminute();
    console.log("Server on port",app.get('port'))
})