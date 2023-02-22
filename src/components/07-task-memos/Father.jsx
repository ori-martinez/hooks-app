/* Components */
import { Children } from './partials/Children';
/* Hooks */
import { useCallback, useState } from 'react';

// ESTILOS
/* Contenedor */
const buttonsDivStyle = "flex items-center justify-center";
/* Textos */
const h1Style = "p-2 mt-8 text-center text-2xl text-blue-600 font-bold";
const h2Style = "text-center text-xl font-semibold";

export const Father = () => {
    // CONSTANTES
    /* Arreglo con los Números de los Botones  */
    const numbers = [ 2, 4, 6, 8, 10 ];

    // HOOKS
    /* Estado del Contador */
    const [ value, setValue ] = useState(0);
    /* Memorización de la Función del Incremento */
    const increment = useCallback(num => 
        setValue(oldValue => oldValue + num)
    , [ ], );

    // RETORNO
    return (
        <>
            {/* Título */}
            <h1 className={ h1Style }> Tarea con Hook/Funciones de Memorización </h1>

            {/* Contador */}
            <h2 className={ h2Style }> Total: { value } </h2>

            <div className={ buttonsDivStyle }>
                {/* Botones para el Incremento */}
                { numbers.map(num =>
                    <Children 
                        key={ num }
                        number={ num }
                        increment={ increment }
                    />
                ) }
            </div>
        </>
    );
}
