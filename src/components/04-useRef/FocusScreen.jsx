/* Hooks */
import { useRef } from 'react';

// ESTILOS
/* Contenedor */
const divStyle = "mt-4 flex flex-col items-center justify-center";
/* Textos */
const h1Style = "p-2 mt-8 text-center text-2xl text-blue-600 font-bold";
/* Input */
const inputStyle = "p-1 pl-2 w-72 text-md border border-gray-900 rounded-lg focus:outline-none focus:ring focus:ring-blue-300";
/* Botón */
const buttonStyle ="py-2 px-4 mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full";

// COMPONENTE
/* Foco de la Pantalla en un Input */
export const FocusScreen = () => {
    // HOOKS
    /* Referencia del Input */
    const inputRef = useRef();

    // FUNCIONES
    /* Funcionalidad del Evento onClick */
    const onClick = () => {
        /* Asignación del Foco sobre el Input */
        inputRef.current.select();
    }

    // RETORNO
    return (
        <>
            {/* Título */}
            <h1 className={ h1Style }>Foco de la Pantalla con useRef() </h1>
        
            <div className={ divStyle }>
                {/* Input */}
                <input
                    ref={ inputRef }
                    type="text"
                    placeholder="Ingrese su nombre"
                    className={ inputStyle }                
                />
                
                {/* Botón */}
                <button 
                    className={ buttonStyle }
                    onClick={ onClick }
                > 
                    Set Focus
                </button>
            </div>
        </>
    );
}
