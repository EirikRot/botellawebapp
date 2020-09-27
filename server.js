const express = require('express');
const cors = require('cors');
const app = express();
const fetch = require('node-fetch');
const os = require('os');
const fs = require('fs');

app.use(cors());


const Datastore  = require('nedb');
const port=process.env.PORT || 8000;
app.listen(port, () => console.log("listening to 8000"));
app.use(express.static('public'));
app.use(express.json({limit: 'imb'}))

const database = new Datastore('database.db');
database.loadDatabase();

app.get('/api/wc/orders', async (request, response) => {
    var orderFunctions = require('./models/wcModels');
    const data = await orderFunctions.getOrders();
    //const data = await orders.json();
    //const tid = data.timeseries(0).time;
    //console.log(data);
    response.json(data);
  }
);

app.post('/api/TT/orders', async (request, response) => {
    //var orderFunctions = require('./models/wcModels');
    //const data = await orderFunctions.getOrders();

    console.log(request);
    //const data = await orders.json();
    //const tid = data.timeseries(0).time;
    //console.log(data);
    //response.json(data);
  }
);



