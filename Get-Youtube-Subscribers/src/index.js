const express = require("express");
const app = require("./app.js");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;

// Configuration of env
require("dotenv").config();

// Parse JSON bodies.
app.use(express.json())
app.use(express.urlencoded({extended: false }));

const DATABASE_URL = process.env.DATABASE_URI;

// Connect to MongoDB.
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// If an error occurs during connection.
db.on("error", (err) => console.log(err));

//log a success message
db.once("open", () => console.log("connected to database"));

// Start Server
app.listen(port, () =>
    console.log(`App listening on port ${port}!`)
);
