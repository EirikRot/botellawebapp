async function transferOrders() {
    var orderFunctionsWC = require('./models/wcModels');
    var orderFunctionsTT = require('./models/tripletexModels');
    var orders = await orderFunctionsWC.getOrders();
    var sessionToken = await orderFunctionsTT.getSessionToken("test-dd7d8e6b-98a0-4d20-a396-87cffd0a659b","test-7665ede9-6c60-4729-9f92-3fa57e4aea05");
        
    var response;
    for (i = 0; i < 1; i++) {
        //console.log(orders[i].meta_data);
        var clientID = orders[i].meta_data[4].value;
        
        var orderDate = "20"+orders[i].meta_data[1].value.substring(6,8)+"-"+orders[i].meta_data[1].value.substring(3,5)+ "-"+orders[i].meta_data[1].value.substring(0,2);
        console.log(orders[i].meta_data[1].value + "->" + orderDate);
        //console.log(orders[i].meta_data[1].value);
        var quantity = orders[i].line_items[0].quantity;
        //console.log(orders[i].line_items[0].quantity);
        var productID = orders[i].line_items[0].sku; 
        //console.log(orders[i].line_items[0].sku);
        var price = orders[i].line_items[0].price;
        //console.log(orders[i].line_items[0].price);
        //console.log("------------------------");
        var customer = await orderFunctionsTT.getCustomer(sessionToken, "11106997");
        //var order = await orderFunctionsTT.createOrder(customer, "Marius test 2", orderDate, orderDate, sessionToken);
        var product = await orderFunctionsTT.getProduct(sessionToken, productID);
        var orderLine = await orderFunctionsTT.createOrderline(sessionToken, product.value, order.value, product.value.priceExcludingVatCurrency, quantity);
        console.log(orderLine);
    }
}


transferOrders();
