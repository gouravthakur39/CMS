const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const hbs = require("express-handlebars");
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

// Setup view engine with Handlebars
app.engine(
  "handlebars",
  hbs({
    defaultLayout: "default"
  })
);
app.set("view engine", "handlebars");

// routes
const defaultRoutes = require('./routes/defaultRoutes');
app.use('/', defaultRoutes);

const adminRoutes = require('./routes/adminRoutes');
app.use('/admin', adminRoutes);

/* Start The Server */
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
