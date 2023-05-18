async function MostrarCantidad(){
    let response = await fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/statistics');
    let objeto = await response.json();
    
    let cantidadProductos = objeto.amount_of_products;
    let text = document.createTextNode(cantidadProductos);
    document.getElementById("cantidadProductos").appendChild(text);
}


async function mostrarProductos(){
    let response = await fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products');
    let productos = await response.json();


    for(let producto of productos){

        let nombre = document.createElement('strong');
        nombre.appendChild(document.createTextNode(producto.title))

        let imagen = document.createElement('img');
        imagen.src = producto.image_url;

        let link = document.createElement('a');
        link.href  = 'index.html';


        link.appendChild(imagen);
        link.appendChild(nombre);

        let div = document.createElement('div');
        div.className = 'preview-producto';
        div.appendChild(link);

        document.getElementById('listado-productos').appendChild(div);
    }

    
}
MostrarCantidad();

mostrarProductos();
