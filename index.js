async function MostrarCantidad(){
    let response = await fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/statistics');
    let objeto = await response.json();
    
    let cantidadProductos = objeto.amount_of_products;
    let text = document.createTextNode(cantidadProductos);
    document.getElementById("cantidadProductos").appendChild(text);
}
MostrarCantidad();
/*
let productos = [
    {srcImagen: 'notebook1.jpg', nombre: 'Notebook Dell Inspiron 3505'},
    {srcImagen: 'notebook2.jpg', nombre: 'Notebook Dell Inspiron 3506'},
    {srcImagen: 'notebook3.webp', nombre: 'Notebook Dell Inspiron 3507'},
    {srcImagen: 'notebook1.jpg', nombre: 'Notebook Dell Inspiron 3505'},
];

for (let producto of productos) {
    let texto = document.createTextNode(producto.nombre)

    let strong = document.createElement('strong');
    strong.appendChild(texto);

    let imagen = document.createElement('img');
    imagen.src = producto.srcImagen;

    let link = document.createElement('a');
    link.href = 'producto.html'
    link.appendChild(imagen)
    link.appendChild(strong);

    let contenedor = document.createElement('div');
    contenedor.className = 'preview-producto';
    contenedor.appendChild(link);

    document.getElementById('listado-productos').appendChild(contenedor);
}*/