/* Components */
import { ShowIncrement } from './partials/ShowIncrement';
/* Hooks */
import { useCallback, useEffect ,useState } from 'react';

// ESTILOS
/* Textos */
const h1Style = "p-2 mt-8 text-center text-2xl text-blue-600 font-bold";
const h2Style = "text-center text-xl font-semibold";

// COMPONENTE
/* Contador con Botones */
export const CallbackHook = () => {
    // HOOKS
    /* Estado del Contador */
    const [ counter, setCounter ] = useState(15);
    /* Memorización de la Función de Incremento del Contador */
    const increment = useCallback((increment) => {
        setCounter((value) => value + increment);
    }
    , [ ], );
    /* Efecto de la Función de Incremento Memorizada */
    useEffect(() => {
        // increment();
    }, [ increment ]);
    
    // FUNCIONES
    /* Incremento del Contador */
    /* const increment = () => setCounter(counter + 1); */

    // RETORNO
    return (
        <>
            {/* Título */}
            <h1 className={ h1Style }> Contador con useState() + memo() + useCallback() </h1>

            {/* Contador */}
            <h2 className={ h2Style }> Counter: { counter } </h2>

            {/* Botón para la Función increment() */}
            <ShowIncrement increment={ increment } />
        </>
    );
}

/* __________________________________________________________________________________________________________

NOTAS:
    1. El pasar como una propiedad la función memorizada con el useCallback() a un componente es un uso muy
común de este hook
    2. Para evitar un loop infinito de rerenderizado del componente, la función memorizada se pasa como 
propiedad de un componente que también esta memorizado con un memo()
    3. Cabe destacar, en lugar de memorizar el componente, puede hacerse que la función memorizada se disparé
como un efecto mediante un useEffect(). Para ello, se evita el loop infinito de rerenderizado colocando la 
función memorizada como dependencia del hook
__________________________________________________________________________________________________________ */
