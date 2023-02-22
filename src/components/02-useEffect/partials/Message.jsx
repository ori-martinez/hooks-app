/* Hooks */
import { useEffect, useState } from 'react';

// ESITLOS
/* Texto */
const h3Style = "text-center text-base text-red-500 font-semibold";
const pStyle = "mb-3 text-center text-md text-blue-800";

// COMPONENTE
/* Mensaje */
export const Message = ({ textMessage }) => {
    // HOOKS
    /* Estado de las Coordenadas del Mouse */
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    /* Efecto del Mensaje */
    useEffect(() => {
        // FUNCIONES
        /* Manejador del Evento mousemove */
        const onMouseMove = ({ x, y }) => {
            /* Asignación de las Coordenadas a la Variable */
            setCoords({ x, y });
        }

        // LISTENER
        /* Agregación para el Evento mousemove */
        window.addEventListener('mousemove', onMouseMove);
    
        // RETORNO
        return () => {
            // LISTENER
            /* Remoción para el Evento mousemove */
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, [ ]);
    
    // RETORNO
    return (
        <>
            <h3 className={ h3Style }> { textMessage } </h3>

            <p className={ pStyle }> { JSON.stringify(coords) } </p>
        </>
    );
}
