/* Funciones */
import { memo } from 'react';

// ESTILOS
/* Textos */
const spanStyle = "text-red-600 font-bold";

// COMPONENTE
/* Texto del Contador */
export const Counter = memo(({ value }) => {
    /* Muestra en Consola para la Demostración de la Rerenderización */
    console.log('COUNTER: Me volví a renderizar!~');

    // RETORNO
    return (
        <span className={ spanStyle }> { value } </span>
    );
});
