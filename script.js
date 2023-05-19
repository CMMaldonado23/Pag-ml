function agregarCometario(evento){
    evento.preventDefault();
    //obtengo valores ingresados del comentario 
    
    let Textocomentario = document.getElementById("Texto-comentario").value;

    let puntaje = document.getElementById("puntaje-producto").value;

    //agrego el feedback a la pagina
    let texto = document.createTextNode(Textocomentario + ' - '+ puntaje + '/5');
    let parrafo = document.createElement('p');
    
    parrafo.appendChild(texto);


    document.getElementById("listado-comentario").appendChild(parrafo);

    // Aca Reinicio los valores para un nuevo comentario
    document.getElementById('Texto-comentario').value = '';
    document.getElementById('puntaje-producto').value = '1';

}

document.getElementById("boton-enviar-comentario").addEventListener('click', agregarCometario);


/*
async function cargarDatosProducto() {
    let response = await fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/1');
    let producto = await response.json();

   
   
    let titulo = document.createTextNode(producto.title);
    document.getElementById('titulo-producto').appendChild(titulo);

    let descripcion = document.createTextNode(producto.description);
    document.getElementById('texto-descripcion').appendChild(descripcion);
    

    document.getElementById('link').href = producto.factory_url;

    document.getElementById('imagen').src = producto.image_url;

    for (let notebook of producto.notebooksTypes){
    let subTituloTipopc = document.createElement('h5');
    subTituloTipopc.appendChild(document.createTextNode('tipoPc'))

    let listaDesordenada = document.createElement('ul')
    let precio = document.createElement('li')
    let ram = document.createElement('li')


    let precioTextNode =  document.createTextNode('Precio: '+ notebook.price);
    let ramTextNode = document.createTextNode('Ram: '+ notebook.ramAmount);

    precio.appendChild(precioTextNode);
    ram.appendChild(ramTextNode);


    listaDesordenada.appendChild(precioTextNode);
    listaDesordenada.appendChild(ramTextNode);

    document.getElementById('descripcion').appendChild(subTituloTipopc);
    document.getElementById('descripcion').appendChild(listaDesordenada);


    
}
}
cargarDatosProducto();*/

const app = Vue.createApp({
    data(){
        return{
            
                "id": 1,
                "title": "Notebook HP 14-dq2024la",
                "description": "Computadora HP orientado para gama media. Procesador Intel® Core™ i3 de 11.ª generación.  Windows 10 Home 64.  Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB . Pantalla de 14 pulgadas.",
                "image_url": "https://ar-media.hptiendaenlinea.com/catalog/product/8/V/8VW01LA-1_T1615590539.png",
                "factory_url": "https://www.hp.com/ar-es/shop/notebook-hp-14-dq2024la-3v8j6la.html",
                "notebooksTypes": [
                  {
                    "ramAmount": "8 GB",
                    "price": 98038
                  },
                  {
                    "ramAmount": "16 GB",
                    "price": 122547
                  }
                ]
              }
        }
    
})

app.mount('.grid-layout')
