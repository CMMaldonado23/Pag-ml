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




/*
    let imagen = objeto.image_url;
    console.log(imagen)
    let textImagen = document.createTextNode(imagen);
    let img = document.createElement('img');
    img.src = imagen
    document.getElementById("imagen-producto").appendChild(img)

    let descripcion = objeto.description;
    console.log(descripcion)
    let text3 = document.createTextNode(descripcion);
    document.getElementById("descripcion1").appendChild(text3);

    let url = objeto.factory_url;
    console.log(url)
    let a = document.getElementById("link");
    a.href = url

    let tipoNootebook = objeto.notebooksTypes;
    console.log(tipoNootebook)

    for (let tipo of productos.notebooksTypes){
        let h3 = document.createElement('h3');
        let textH3 = document.createTextNode('Tipo Computadora')
        let lista = document.createElement('ul');
        let precio = document.createElement('li');
        let ram = document.createElement('li');
        let preciotxt = document.createTextNode('precio: ' + tipoNootebook.precio)
        let ramtxt = document.createTextNode('Ram: ' + tipoNootebook.ram)

        precio.appendChild(preciotx)
        ram.appendChild(ramtxt)

        lista.appendChild(precio)
        lista.appendChild(ram)
    }
*/

}
cargarDatosProducto();

