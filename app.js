const {globalVariables} = require('./config/configuration');

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const hbs = require("express-handlebars");
const flash = require("connect-flash");
const session = require("express-session");
const methodOverride = require("method-override")
const { mongodbUrl, PORT } = require("./config/configuration");


const app = express();

// configure mongoose to connect to mongoDB
mongoose
  .connect(mongodbUrl, { useNewUrlParser: true })
  .then(response => {
    console.log("MongoDB successfully connected");
  })
  .catch(err => {
    console.log("Database connection failed");
  });

// configuring express
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(express.static(path.join(__dirname, "public")));

// flash and sessions
app.use(session({
  secret: 'anysecret',
  saveUninitialized: true,
  resave: true

}));

app.use(flash());

app.use(globalVariables);

// Setup view engine with Handlebars
app.engine(
  "handlebars",
  hbs({
    defaultLayout: "default"
  })
);
app.set("view engine", "handlebars");

// Method override middleware
app.use(methodOverride('newMethod'));

// routes
const defaultRoutes = require('./routes/defaultRoutes');
app.use('/', defaultRoutes);

const adminRoutes = require('./routes/adminRoutes');
app.use('/admin', adminRoutes);

/* Start The Server */
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
