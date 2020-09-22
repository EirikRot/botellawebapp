
const fetch = require('node-fetch');
module.exports = {
  
  getSessionToken: 
  
  async function getSessionTokenTripletex(consumerToken, employeetoken) {
    const url = "https://api.tripletex.io/v2/token/session/:create?&consumerToken=" + consumerToken + "&employeeToken=" + employeetoken +"&expirationDate=2025-09-30"
    options = {
      method: 'PUT',
    };
    const response = await fetch(url, options);
    const dataJson = await response.json();
    const sessionToken = await  Buffer.from("0:"+dataJson.value.token).toString('base64');
    //console.log(sessionToken)
    return sessionToken;
  },
  getCustomer: 
  
    async function GetCustomer(sessionToken, clientID) {
      //var sessionToken = await getSessionTokenTripletex("test-dd7d8e6b-98a0-4d20-a396-87cffd0a659b", "test-7665ede9-6c60-4729-9f92-3fa57e4aea05");
      var url;
      if (clientID == "") {
        url = "https://api.tripletex.io/v2/customer?isInactive=false&from=0&count=1000"
      } else {
        url = "https://api.tripletex.io/v2/customer/" + clientID
      }
      const options =  {
        method: 'GET',
        headers: {
          Authorization : "Basic " + sessionToken
        }
      }
      const response = await fetch(url, options);
      const dataJson = await response.json();
      if (clientID == "") {
        return dataJson
      } else {
         return dataJson.value;
      }
    },

  createOrder:

    async function createOrder(customer, reference, orderDate, deliveryDate, sessionToken) {
      //const client = await GetCustomer(clientID);
      //var sessionToken = await getSessionTokenTripletex("test-dd7d8e6b-98a0-4d20-a396-87cffd0a659b", "test-7665ede9-6c60-4729-9f92-3fa57e4aea05");
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': "application/json",
          Authorization: "Basic " + sessionToken
        },
        body: JSON.stringify({ customer: customer, reference: reference, orderDate: orderDate, deliveryDate: deliveryDate })
      };

      const response = await fetch("https://api.tripletex.io/v2/order", options);
      const dataJson = await response.json();
      return dataJson;
    },
  
  getProduct: 

    async function(sessionToken, productID) {
      var url;
      if (productID == "") {
        url = "https://api.tripletex.io/v2/product"
      } else {
        url = "https://api.tripletex.io/v2/product/" + productID
      }
      const options =  {
        method: 'GET',
        headers: {
          Authorization : "Basic " + sessionToken
        }
      }
      const response = await fetch(url, options);
      const dataJson = await response.json();
      return dataJson;
    },
  
  createOrderline:

    async function(sessionToken, product, order, price, quantity,) {
      
      const options = {
        method: 'POST',
        headers: {
          'Accept': "application/json",
          'Content-Type': "application/json",
          Authorization: "Basic " + sessionToken
        },
        body: JSON.stringify({product: product, order: order, count: quantity, unitPriceExcludingVatCurrency: price}),
        
      };

      const response = await fetch("https://api.tripletex.io/v2/order/orderline", options);
      const dataJson = await response.json();
      return dataJson;
    }

  }

  



