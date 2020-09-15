async function transferOrders() {
    var orderFunctions = require('./public/js/wcModels');
    var orders = await orderFunctions.getOrders();
    for (i = 0; i < orders.length; i++) {
        console.log(orders[i].meta_data[4].value);
        console.log(orders[i].meta_data[1].value);
        console.log(orders[i].line_items[0].quantity);
        console.log(orders[i].line_items[0].sku);
        console.log(orders[i].line_items[0].price);
        console.log("------------------------");
    }
}


transferOrders();
