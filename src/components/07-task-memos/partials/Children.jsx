import React from 'react';

// ESTILOS
/* Botón */
const buttonStyle ="py-2 px-6 mt-8 mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full";

// COMPONENTE
/* Botón para el Incremento */
export const Children = React.memo(({ number, increment }) => {
    /* Muestra en Consola para la Demostración de la Rerenderización */
    console.log('CHILDREN: Me volví a renderizar!~');
    
    // RETORNO
    return (
        <button
            className={ buttonStyle }
            onClick={ () => increment(number) }
        >
            + { number }
        </button>
    );
});
