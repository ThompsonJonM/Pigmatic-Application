const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const MuseumCollection = require('./models/MuseumCollection');
const Accession = require('./models/Accession');

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/pigmaticCollections');
const db = mongoose.connection;

db.on('error', function(error) {
  console.log('Mongoose error: ' + error);
});

db.once('open', function() {
  console.log('DB connect successful.');
});

let exampleCollection = new MuseumCollection({
  "collectionName": "19th Century America",
  "accessionID": 72,
  "accessions": [{
    "acqNumber": "2017.72.01",
    "acqMethod": "Donation",
    "acqName": "Chert",
    "acqCollection": "19th Century American",
    "acqProv": "Striking Stone",
    "acqDonor": "Anonymous",
    "acqDescribe": "A small flake of chert."
  }]
})

exampleCollection.save(function(error, doc) {
  // Log any errors
  if (error) {
    console.log(error);
  }
  // Or log the doc
  else {
    console.log(doc);
  }
});

const appRouter = require('./routes/appRouter');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/collections', appRouter);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
