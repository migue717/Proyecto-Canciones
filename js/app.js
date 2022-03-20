import * as UI from './interfaz.js';
import API from './api.js';

UI.formularioBuscar.addEventListener('submit', buscarCancion);

function buscarCancion (e) {
    e.preventDefault();

    // Obtenemos los datos del formulario
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    // Validamos que los campos del formulario estén correctos
    if( artista ==='' || cancion ==='') {
        UI.divMensaje.textContent = 'Todos los campos son obligatorios';
        UI.divMensaje.classList.add('error');

        // Eliminamos el mensajes a los 3 segundos
        setTimeout(() => {
            UI.divMensaje.textContent = '';
            UI.divMensaje.classList.remove('error');
        }, 3000);

        return;
    }

    // Consultamos la API

    const busqueda = new API(artista, cancion);
    busqueda.consultarAPI();

}