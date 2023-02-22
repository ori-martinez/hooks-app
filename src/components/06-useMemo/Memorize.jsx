/* Hooks */
import { useCounter } from "../../hooks";

// ESTILOS
/* Contenedor */
const buttonDivStyle = "flex items-center justify-center";
/* Textos */
const h1Style = "p-2 mt-8 text-center text-2xl text-blue-600 font-bold";
const h2Style = "text-center text-xl font-semibold";
/* Botón */
const buttonStyle ="py-2 px-4 mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full";

// COMPONENTE
/*  */
export const Memorize = () => {
    // HOOKS
    /* Contador */
    const { counter, increment } = useCounter(0);

    // RETORNO
    return (
        <>
            {/* Título */}
            <h1 className={ h1Style }> Uso de Múltiples Costum Hooks </h1>

            {/* Contador */}
            <h2 className={ h2Style }> Counter: <span> { counter } </span> </h2>

            <div className={ buttonDivStyle }>
                {/* Botón */}
                <button 
                    className={ buttonStyle }
                    onClick={ () => increment() }
                > 
                    + 1
                </button>
            </div>
        </>
    )
}
