// Exportaciones

export const formularioBuscar = document.querySelector('#formulario-buscar');
export const divBuscar = document.querySelector('#buscar');
export const divMensaje = document.querySelector('#mensajes');
export const divResultado = document.querySelector('#resultado');
export const headingResultado = document.querySelector('.letra-resultado h2');

export function Spinner() {

    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-fading-circle');

    divSpinner.innerHTML = `
    <div class="spinner">
    <div class="cube1"></div>
    <div class="cube2"></div>
    </div>
    `;

    resultado.appendChild(divSpinner);

}

export function limpiarHTML() {
    while(divResultado.firstChild) {
        divResultado.removeChild(divResultado.firstChild);
    }
}
