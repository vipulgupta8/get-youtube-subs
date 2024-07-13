const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
const data = require('./data')

// Config of dotenv
require("dotenv").config();
const DATABASE_URL = process.env.DATABASE_URI;

//Connect to MongoDB using Mongoose

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// It will show error if error occur during connection

db.on("error", (err) => console.log(err));

db.once("open", () => console.log("Database created"));

const lastFunction = async () => {
  await subscriberModel.deleteMany({});
  await subscriberModel.insertMany(data);
  await mongoose.disconnect();
};

lastFunction();