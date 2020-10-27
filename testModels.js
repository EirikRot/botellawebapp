const fetch = require('node-fetch');

async function testGetOrdersWC() {
    var wcFunctions = require('./models/wcModels');
    var orders = await wcFunctions.getOrders("all");
    console.log(orders[0].line_items[0]);
    //var customerID = orders[0].meta_data[4].value;
    //console.log(customerID);
}

testGetOrdersWC();

async function testUpdateOrdersWC() {
    var wcFunctions = require('./models/wcModels');
    var orders = await wcFunctions.updateOrders("13657", "completed");
    console.log(orders);
}

//testUpdateOrdersWC();

async function testGetOrdersTT() {
    var ttFunctions = require('./models/tripletexModels');
    var sessionToken = await ttFunctions.getSessionToken("test-dd7d8e6b-98a0-4d20-a396-87cffd0a659b","test-7665ede9-6c60-4729-9f92-3fa57e4aea05");
    console.log(sessionToken);
}



//testGetOrdersTT();

async function testGetCustomer(customer) {
    var ttFunctions = require('./models/tripletexModels');
    var sessionToken = await ttFunctions.getSessionToken("test-dd7d8e6b-98a0-4d20-a396-87cffd0a659b","test-7665ede9-6c60-4729-9f92-3fa57e4aea05");
    var customer = await ttFunctions.getCustomer(sessionToken, customer);
    console.log(customer);
}

//testGetCustomer("10001");

async function testGetProduct() {
    var ttFunctions = require('./models/tripletexModels');
    var sessionToken = await ttFunctions.getSessionToken("test-dd7d8e6b-98a0-4d20-a396-87cffd0a659b","test-7665ede9-6c60-4729-9f92-3fa57e4aea05");
    var product = await ttFunctions.getProduct(sessionToken, "21513492");
    console.log(product);
}

//testGetProduct();

async function testCreateOrder() {
    var ttFunctions = require('./models/tripletexModels');
    var sessionToken = await ttFunctions.getSessionToken("test-dd7d8e6b-98a0-4d20-a396-87cffd0a659b","test-7665ede9-6c60-4729-9f92-3fa57e4aea05");
    var customer = await ttFunctions.getCustomer(sessionToken, "11106997");
    var order = await ttFunctions.createOrder(customer, "Marius test 2", "2020-09-16", "2020-09-23", sessionToken);
    console.log(order);
}

//testCreateOrder();


async function testCreateOrderLine() {
    var ttFunctions = require('./models/tripletexModels');
    var sessionToken = await ttFunctions.getSessionToken("test-dd7d8e6b-98a0-4d20-a396-87cffd0a659b","test-7665ede9-6c60-4729-9f92-3fa57e4aea05");
    var product = await ttFunctions.getProduct(sessionToken, "21513492");
    //console.log(product.value.priceExcludingVatCurrency);
    var customer = await ttFunctions.getCustomer(sessionToken, "11106997");
    var order = await ttFunctions.createOrder(customer, "Marius test 3 - med ordrelinje", "2020-09-16", "2020-09-23", sessionToken);
    //console.log(order);
    var orderLine = await ttFunctions.createOrderline(sessionToken, product.value, order.value, product.value.priceExcludingVatCurrency, 4.00);
    console.log(orderLine);
}

//testCreateOrderLine();

//kundeID = 11106997
//produktID = 21513492

