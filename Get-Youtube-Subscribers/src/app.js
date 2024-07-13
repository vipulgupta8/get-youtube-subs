const express = require("express");
const path = require("path");
const Subscriber = require("./models/subscribers");

const app = express();

// To use static files.
app.use(express.static("public"));


// API to show html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});


// API to get data of subscribers
app.get("/subscribers", async (req, res) => {
  try {
    let subscribers = await Subscriber.find();
    res.status(200).send(subscribers);
  } catch (error) {
    res.status(404)
    .send({
      message:"Error"
    });
  }
});


// API to get subscribers by name.
app.get("/subscribers/names", async (req, res) => {
  try {
    let subscribers = await Subscriber.find(
      {},
      { name: 1, subscribedChannel: 1, _id: 0 }
    );
    res.status(200).send(subscribers);
  } catch (error) {
    res.status(404)
    .send({ Error: "No name found." });
  }
});

// API to get subscribers by id
app.get("/subscribers/:id", async (req, res) => {
  try {
    let subscribers = await Subscriber.findById(req.params.id);
    // Response data
    res.status(200).send(subscribers);
  } catch (error) {
    res
      .status(400) 
      .send({ message: error.message });
  }
});

app.use((req, res) => {
    res.status(404).json({ message: "Route not correct" });
});

module.exports = app;
