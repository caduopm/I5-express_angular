var cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const bodyParser = require('body-parser')


app.use(cors())
app.use(bodyParser.json());

//Connection to DB
mongoose.connect('mongodb+srv://dbProjectF:admin@cluster0.fckbf.mongodb.net/dbMurder?retryWrites=true&w=majority', 
    { useUnifiedTopology: true, useNewUrlParser: true },

    () => console.log('Connected to DB')
);

//My Routes
const murderRoute = require('./routes/general');
const sugestionRoute = require('./routes/sugestion');
const chartsRoute = require('./routes/charts');

//Setting Routes
app.use('/', murderRoute);
app.use('/sugestion/', sugestionRoute);
app.use('/charts/', chartsRoute);

app.listen(3000);
