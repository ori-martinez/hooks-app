/* Funciones */
import React from 'react';

// ESTILOS
/* Contenedor */
const buttonDivStyle = "flex items-center justify-center";
/* Botón */
const buttonStyle ="py-2 px-4 mt-8 mx-6 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full";

// COMPONENTE
/* Botón para la Función increment() */
export const ShowIncrement = React.memo(({ increment }) => {
    /* Muestra en Consola para la Demostración de la Rerenderización */
    console.log('SHOW INCREMENT: Me volví a renderizar!~');

    // RETORNO
    return (
        <div className={ buttonDivStyle }>
            <button
                className={ buttonStyle }
                onClick={ () => increment(5) }
            >
                Incrementar
            </button>
        </div>
    );
});
