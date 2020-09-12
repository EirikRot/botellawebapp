const express = require('express');
const cors = require('cors');
const app = express();
const fetch = require('node-fetch');
const os = require('os');
const fs = require('fs');

app.use(cors());


const Datastore  = require('nedb');
const port=process.env.PORT || 8000;
app.listen(port, () => console.log("listening to 80"));
app.use(express.static('public'));
app.use(express.json({limit: 'imb'}))

const database = new Datastore('database.db');
database.loadDatabase();

