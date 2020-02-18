const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const hbs = require('express-handlebars')
const {mongodbUrl} = require('./config/configuration')

const app = express();

// configure mongoose to connect to mongoDB
mongoose.connect(mongodbUrl, 
    {useNewUrlParser:true})
    .then(response => {
        console.log('MongoDB successfully connected');
    }).catch(err => {
        console.log('Database connection failed');
    });

// configuring express
app.use(express
    .json()
);

app.use(express.urlencoded({
    extended:true }
));

app.use(express.static(path
    .join(__dirname, 'public')
));

// Setup view engine with Handlebars
app.engine('handlebars', hbs({
    defaultLayout: 'default'
}));
app.set('view engine', 'handlebars');

// Routes
app.use('/', (req, res) => {
    res.render('default/index');
});


app.listen(3000, () => {
    console.log('Server running on port 3000');
});

