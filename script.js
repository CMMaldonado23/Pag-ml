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
                notebookSeleccionada:0,
                notebooksCompradas:[],
                "notebooksTypes": [
                  {
                    "ramAmount": "8 GB",
                    "price": 98038
                  },
                  {
                    "ramAmount": "16 GB",
                    "price": 122547
                  }
                ],
                imagenes: [
                        'https://ar-media.hptiendaenlinea.com/catalog/product/8/V/8VW01LA-1_T1615590539.png',
                        'data:image/jpeg;base64,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',
                        'data:image/jpeg;base64,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bOJ7BAkIh+kfE/pJOGwuY2UXPHh8pjcztxPymb2SRTTX2mNz+kCv+Cce74WlJUjeCOekkvjTw/aWXrE7zAozQSeX+dk+VHCi7EKB26fGStm4CviLfw+HqVAbdewSlrxFR7Kw+rrAjW7f2h7KLkhR2nqjnczdNm+jys2uIrrTH0KAzuP/AG1BYcsh5zbNl9E8HQIZKCs49+perUB4kM98v2bCBy/ZmxMRXsaVB3U+9b1dPmHewcfVBm2bM9HzaGvWC/00hmN/+Rxu5IOc6HEDD7N6O4agQ1OiuYe+13qd9na5HIWEzERAREQEREBERAREQEREBERAREQMHtPopgq5zVMMmb6ag06n30s3nNQ2p6JMO1zRruh4CoBVUDsDKVcDmxnS4gcL2l6Ptp0mLoRUvxpONwFtUcoRuG5mmvY2s9J7YnDPS4DOjUyWubkN1cw3ds9Ky3UpqwIZQwO8EAg8wYHmtdo0hqPnc+YEmLjaXqjVNRRZsvqyR6w/1BQfZ7yRO14noXs5zdsFQueKoqHn1bSrB9D9n0iCmDoAjcSiswPcWuRA47sqhXxP/b4arVB96wSmObscp5Zrzb9mejrEPY4iulEfQojO9v8AkcWHLKwnUALaDdKoGtbJ6FYHDkMtAO419ZVPrXB7Rm0U/VAmyxEBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/2Q==',
                        'data:image/jpeg;base64,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',
                ]
              }
        },
        methods:{
          clickBotonCompra(indice){
            this.notebooksCompradas.push(this.notebooksTypes[indice])

          },
          cambiarImagen(imagenUrl){
            this.image_url =imagenUrl;
          },
          seleccionarTipoPc(indice){
            this.notebookSeleccionada = indice;
          },
          eliminarCompra(indice){
            this.notebooksCompradas = this.notebooksCompradas.filter((value, index) => index !== indice);
          }
        },
        computed: {
          total() {
            let total = 0;
            for(let notebookComprada of this.notebooksCompradas){
              total += notebookComprada.price;

              
            }
            return total;
          },
          mostrarCarroDeCompras(){
            return this.notebooksCompradas.length !== 0;
          }
          
        }

      
    
})

app.mount('.grid-layout')
