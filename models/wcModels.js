const fetch = require('node-fetch');
module.exports = {getOrders: 

    async function getOrdersWC(inStatus) {
        var status = await inStatus;

        if (status = "all") {
            var url = 'https://botellatest.temp312.kinsta.cloud/wp-json/wc/v3/orders';
        } else {
            var url = "https://botellatest.temp312.kinsta.cloud/wp-json/wc/v3/orders?status="+status;
        }
        //console.log(url);
        const consumerKey = 'ck_31cab162a5df09492dd74d76ee89a3861dcf969a' // Your consumer key
        const consumerSecret = 'cs_72bda7c218c8426754b83eab41d1e75e20660b12' // Your consumer secret
        options = { 
            method: 'GET',
            headers: {
                Accept : "application/json",
                Authorization : 'Basic ' + Buffer.from(consumerKey + ":" + consumerSecret).toString('base64') 
            } 
        }
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    }, 
    
    updateOrders: 

    async function updateOrdersWC(id, status) {
        var toStatus = await status;
        var orderId = await id;
        const url = 'https://botellatest.temp312.kinsta.cloud/wp-json/wc/v3/orders/'+orderId;
        
        const consumerKey = 'ck_31cab162a5df09492dd74d76ee89a3861dcf969a' // Your consumer key
        const consumerSecret = 'cs_72bda7c218c8426754b83eab41d1e75e20660b12' // Your consumer secret
        options = { 
            method: 'PUT',
            headers: {
                Accept : "application/json",
                Authorization : 'Basic ' + Buffer.from(consumerKey + ":" + consumerSecret).toString('base64') 
            },
            body: JSON.stringify({status: toStatus})  
        }
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    },
    
    
    updateData:  
        async function updateData() {
            const data = await getOrdersWC();
        }   
}











  