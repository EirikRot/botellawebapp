
const fetch = require('node-fetch');

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
}


//11106997

async function GetCustomer(clientID) {
  var sessionToken = await getSessionTokenTripletex("test-dd7d8e6b-98a0-4d20-a396-87cffd0a659b", "test-7665ede9-6c60-4729-9f92-3fa57e4aea05");
  var url;
  if (clientID == "") {
    url = "https://api.tripletex.io/v2/customer?isInactive=false&from=0&count=1000"
  } else {
    url = "https://api.tripletex.io/v2/customer/" + clientID
  }
  const options = await {
    method: 'GET',
    headers: {
      Authorization : "Basic " + sessionToken
    }
  };

  const response = await fetch(url, options);
  const dataJson = await response.json();
  console.log(dataJson);
  if (clientID == "") {
    return ""
  } else {
    return dataJson.value;
  }
}

async function addOrders(clientID, date, productID) {
  const client = await GetCustomer(clientID);
  var sessionToken = await getSessionTokenTripletex("test-dd7d8e6b-98a0-4d20-a396-87cffd0a659b", "test-7665ede9-6c60-4729-9f92-3fa57e4aea05");
  const options = {
    method: 'POST',
    headers: {
      'Content-Type' : "application/json",
      Authorization: "Basic " + sessionToken
    },
    body: JSON.stringify({customer: client, reference: "marius test 1", orderDate: '2020-09-06', deliveryDate: '2020-09-09'})
  };

  const response = await fetch("https://api.tripletex.io/v2/order", options);
  const dataJson = await response.json();
  console.log(dataJson);
}



