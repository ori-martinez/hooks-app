/* Hooks */
import { useMemo, useState } from 'react';
import { useCounter } from '../../hooks';

// ESTILOS
/* Contenedor */
const buttonDivStyle = "flex items-center justify-center";
/* Textos */
const h1Style = "p-2 mt-8 text-center text-2xl text-blue-600 font-bold";
const h2Style = "text-center text-xl font-semibold";
const spanStyle = "text-red-600 font-bold";
const pStyle = "my-4 text-center text-red-600 text-lg font-bold";
/* Botón */
const buttonStyle ="py-2 px-4 mt-8 mx-6 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full";

// FUNCIONES
/* Generación de Carga Pesada */
const heavyStuff = (iterationNum = 100) => {
    // CICLO
    /* Impresiones por Consola hasta el Número de Iteraciones */
    for (let i = 0; i < iterationNum; i++) {
        console.log('Ahí vamos...')
    }

    // RETORNO
    return `${ iterationNum } done`;
}

// COMPONENTE
/* Contador con Botones */
export const MemorizeHook = () => {
    // HOOKS
    /* Contador */
    const { counter, increment } = useCounter(50);
    /* Estado de Mostrar/Ocultar */
    const [ show, setShow ] = useState(true);
    /* Memorización de la Función */
    const memorizedValue = useMemo(() => { heavyStuff(counter) }, [ counter ]);

    // RETORNO
    return (
        <>
            {/* Título */}
            <h1 className={ h1Style }> Contador con Costum Hook: useCounter() + useMemo() </h1>

            {/* Contador */}
            <h2 className={ h2Style }> Counter: 
                <span className={ spanStyle }> { counter } </span> 
            </h2>

            <p className={ pStyle }> { memorizedValue } </p>

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
