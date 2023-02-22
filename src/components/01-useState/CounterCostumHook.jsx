/* Hooks */
import { useCounter } from '../../hooks';

// ESTILOS
/* Textos */
const h1Style = "p-2 mt-8 text-center text-2xl text-blue-600 font-bold";
const h2Style = "text-center text-xl font-semibold";
/* Botones */
const buttonDivStyle = "flex items-center justify-center mt-6";
const buttonStyle = " py-2 px-4 mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full";

// COMPONENTE
/* Contadores mediante Custom Hook */
export const CounterCostumHook = () => {
    // HOOKS
    /* Contador */
    const { counter, increment, decrement, reset } = useCounter();

    // RETORNO
    return (
        <>
            {/* Título */}
            <h1 className={ h1Style }> Contador con Costum Hook: useCounter() </h1>

            <h2 className={ h2Style }> Counter: { counter } </h2>

            {/* Botón de Incremento del Contador */}
            <div className={ buttonDivStyle }>
                <button 
                    className={ buttonStyle }
                    onClick={ () => increment(2) }
                > 
                    + 2
                </button>
                <button 
                    className={ buttonStyle }
                    onClick={ reset }
                > 
                    Reset 
                </button>
                <button 
                    className={ buttonStyle }
                    onClick={ () => decrement(2) }
                > 
                    - 2 
                </button>
            </div>
        </>
    );
}
