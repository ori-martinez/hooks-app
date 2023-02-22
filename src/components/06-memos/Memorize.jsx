/* Components */
import { Counter } from './partials/Counter';
/* Hooks */
import { useState } from 'react';
import { useCounter } from '../../hooks';

// ESTILOS
/* Contenedor */
const buttonDivStyle = "flex items-center justify-center";
/* Textos */
const h1Style = "p-2 mt-8 text-center text-2xl text-blue-600 font-bold";
const h2Style = "text-center text-xl font-semibold";
/* Botón */
const buttonStyle ="py-2 px-4 mt-8 mx-6 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full";

// COMPONENTE
/* Contador con Botones */
export const Memorize = () => {
    // HOOKS
    /* Contador */
    const { counter, increment } = useCounter(0);
    /* Estado de Mostrar/Ocultar */
    const [ show, setShow ] = useState(true);

    // RETORNO
    return (
        <>
            {/* Título */}
            <h1 className={ h1Style }> Contador con Costum Hook: useCounter() + memo() en el children </h1>

            {/* Contador */}
            <h2 className={ h2Style }> Counter: 
                <Counter value={ counter } /> 
            </h2>

            <div className={ buttonDivStyle }>
                {/* Botón de Incremento*/}
                <button 
                    className={ buttonStyle }
                    onClick={ () => increment() }
                > 
                    + 1
                </button>
                {/* Botón para Mostrar/Ocultar */}
                <button 
                    className={ buttonStyle }
                    onClick={ () => setShow(!show) }
                > 
                    Show/Hide: { JSON.stringify(show) }
                </button>
            </div>
        </>
    );
}
