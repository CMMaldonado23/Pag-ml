function agregarCometario(evento){
    evento.preventDefault();
    //obtengo valores ingresados del comentario 
    let Textocomentario = document.getElementById("Texto-comentario").value;

    let puntaje = document.getElementById("puntaje-producto").value;

    //agrego el feedback a la pagina
    let texto = document.createTextNode(Textocomentario + ' - '+ puntaje + '/5').value;
    let parrafo = document.createElement('p');
    parrafo.appendChild(texto);


    document.getElementById("listado-comentario").appendChild(parrafo);

    // Aca Reinicio los valores para un nuevo comentario
    document.getElementById('Texto-comentario').value = '';
    document.getElementById('puntaje-producto').value = '1';

}

document.getElementById("boton-enviar-comentario").addEventListener('click', agregarCometario);
