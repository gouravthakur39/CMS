const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const app = express();

// configure mongoose to connect to mongoDB
mongoose.connect('mongodb://localhost:27017/cms', 
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

// Routes
app.use('/', (req, res) => {
    res.send('Welcome to CMS');
});


app.listen(3000, () => {
    console.log('Server running on port 3000');
});

