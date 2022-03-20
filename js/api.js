import * as UI from './interfaz.js';

class API {

    constructor(artista, cancion) {
        this.artista = artista.toUpperCase();
        this.cancion = cancion.toUpperCase(); 
    }

    consultarAPI() {

        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        // Mostramos el Spinner en la espera
        UI.Spinner();
    
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => {

                if(resultado.lyrics) {
                    const { lyrics } = resultado;

                    // Resultado
                    UI.divResultado.textContent = lyrics;
                    UI.divResultado.classList.add('text-light', 'bg-dark');
                    UI.headingResultado.innerHTML = `<b>Artista: </b>${this.artista}<b><br>Canción: </b>${this.cancion}`;
                    UI.headingResultado.classList.add('text-light', 'bg-dark');
                    
                } else {
                    UI.limpiarHTML();
                    UI.divMensaje.textContent = 'La canción y/o artista no se ha encontrado.';
                    UI.divMensaje.classList.add('error');
                    setTimeout(() => {
                        UI.divMensaje.textContent = '';
                        UI.divMensaje.classList.remove('error');
                    }, 3000);
                }

                
            })
           
    
    }

}



export default API;