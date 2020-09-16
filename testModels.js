const fetch = require('node-fetch');

async function testGetOrdersWC() {
    var orderFunctions = require('./models/wcModels');
    var orders = await orderFunctions.getOrders();
    console.log(orders);
}

//testGetOrdersWC();

async function testGetOrdersTT() {
    var ttFunctions = require('./models/tripletexModels');
    var sessionToken = await ttFunctions.getSessionToken("test-dd7d8e6b-98a0-4d20-a396-87cffd0a659b","test-7665ede9-6c60-4729-9f92-3fa57e4aea05");
    console.log(sessionToken);
}

//testGetOrdersTT();

async function testGetCustomer() {
    var ttFunctions = require('./models/tripletexModels');
    var sessionToken = await ttFunctions.getSessionToken("test-dd7d8e6b-98a0-4d20-a396-87cffd0a659b","test-7665ede9-6c60-4729-9f92-3fa57e4aea05");
    var customer = await ttFunctions.getCustomer(sessionToken, "");
    console.log(customer);
}

//testGetCustomer();

async function testGetProduct() {
    var ttFunctions = require('./models/tripletexModels');
    var sessionToken = await ttFunctions.getSessionToken("test-dd7d8e6b-98a0-4d20-a396-87cffd0a659b","test-7665ede9-6c60-4729-9f92-3fa57e4aea05");
    var product = await ttFunctions.getProduct(sessionToken, "21513492");
    console.log(product);
}

//testGetProduct();

async function testCreateOrderLine() {
    var ttFunctions = require('./models/tripletexModels');
    var sessionToken = await ttFunctions.getSessionToken("test-dd7d8e6b-98a0-4d20-a396-87cffd0a659b","test-7665ede9-6c60-4729-9f92-3fa57e4aea05");
    var product = await ttFunctions.getProduct(sessionToken, "21513492");
    var orderLine = await ttFunctions.createOrderline(sessionToken, product.value);
    console.log(orderLine);
}

testCreateOrderLine();