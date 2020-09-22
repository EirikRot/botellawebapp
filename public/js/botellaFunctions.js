
async function getWCOrders() {
    const url = '/api/wc/orders';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    document.getElementById("antUPordre").textContent = data.length;
}