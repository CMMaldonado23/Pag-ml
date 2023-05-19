async function MostrarCantidad(){
    let response = await fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/statistics');
    let objeto = await response.json();
    
    let cantidadProductos = objeto.amount_of_products;
    let text = document.createTextNode(cantidadProductos);
    document.getElementById("cantidadProductos").appendChild(text);
}
MostrarCantidad();
