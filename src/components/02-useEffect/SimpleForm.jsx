/* Components */
import { Message } from './partials';
/* Hooks */
import { useState } from 'react';

// ESTILOS
/* Contenedor */
const divStyle = "mt-4 flex flex-col items-center justify-center";
/* Textos */
const h1Style = "p-2 mt-8 text-center text-2xl text-blue-600 font-bold";
/* Input */
const inputStyle = "p-1 pl-2 my-2 w-72 text-md border border-gray-900 rounded-lg focus:outline-none focus:ring focus:ring-blue-300";

// COMPONENTE
/* Formulario Simple */
export const SimpleForm = () => {
    // HOOKS
    /* Estado del Formulario */
    const [ formState, setFormState ] = useState({
        username: 'ori_martinez',
        email: 'martinez.oriana.e@gmail.com',
    });

    // CONSTANTES
    /* Destructuración del formState */
    const { username, email } = formState;

    // FUNCIONES
    /* Manejador del Cambio en un Input */
    const handleChange = ({target}) => {
        // CONSTANTES
        /* Desestructuración del Objeto */
        const { name, value } = target;
        
        /* Asignación del Valor Ingresado al Estado del Formulario */
        setFormState({
            ...formState,
            [ name ]: value,
        });
    }

    // RETORNO
    return (
        <>
            {/* Título */}
            <h1 className={ h1Style }> Formulario Simple con useEffect() </h1>

            <div className={ divStyle }>
                {/* Input de Usuario */}
                <input 
                    type="text"
                    name="username"
                    placeholder="Usuario"
                    value={ username }
                    className={ inputStyle }
                    onChange={ handleChange }
                />

                {// CONDICIONAL
                /* Comprobación de la Coincidencia del username */
                (username === 'ori_martinez51') &&
                    /* Mensaje de Error */
                    <Message textMessage="El usuario ya existe!" />
                }

                {/* Input de Email */}
                <input 
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={ email }
                    className={ inputStyle }
                    onChange={ handleChange }                
                />

                
            </div>
        </>
    );
}
