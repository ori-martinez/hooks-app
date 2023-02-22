/* Hooks */
import { useState } from 'react';

// ESTILOS
/* Contenedores */
const countersDivStyle = "mx-auto w-3/5 flex flex-row flex-wrap items-center justify-around";
const buttonDivStyle = "flex items-center justify-center mt-6";
/* Textos */
const h1Style = "p-2 mt-8 text-center text-2xl text-blue-600 font-bold";
const h2Style = "text-center text-xl font-semibold";
/* Botón */
const buttonStyle = " py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full";

// COMPONENTE
/* Contadores mediante useState() con Botón */
export const CounterApp = () => {
    // CONSTANTE
    /* Estado de los Contadores */
    const [stateCounters, setCounter] = useState({
        counter1: 0,
        counter2: 10,
        counter3: 20,
    });

    // CONSTANTES
    /* Destructuración de los Contadores */
    const { counter1, counter2, counter3 } = stateCounters;

    // RETORNO
    return (
        <>
            {/* Título */}
            <h1 className={ h1Style }> Contadores con useState() </h1>

            <div className={ countersDivStyle }>
                {/* Contadores */}
                <h2 className={ h2Style }> Counter: { counter1 } </h2>
                <h2 className={ h2Style }> Counter: { counter2 } </h2>
                <h2 className={ h2Style }> Counter: { counter3 } </h2>
            </div>

            <div className={ buttonDivStyle }>
                {/* Botón de Incremento del Contador */}
                <button
                    className={ buttonStyle }
                    onClick={ () => setCounter({
                        ...stateCounters,
                        counter1: counter1 + 1,
                    }) } 
                > 
                    + 1 
                </button>
            </div>
        </>
    );
}
