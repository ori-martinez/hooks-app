/* Contexto */
import { UserContext } from '../context/UserContext';
/* Hooks */
import { useContext } from 'react';

// ESTILOS
/* Contenedor */
const buttonDivStyle = "flex justify-center";
/* Textos */
const titleStyle = "p-2 text-center text-orange-500 text-3xl font-bold";
const preStyle = "mt-8 flex justify-center text-lg";
/* Botón */
const buttonStyle ="py-2 px-4 mt-6 bg-cyan-500 hover:bg-cyan-700 text-white font-bold rounded-full";

// PAGINA
/* Vista del Login */
export const Login = () => {
    // HOOKS
    /* Obtención del Contexto del Usuario*/
    const { user, setUser } = useContext(UserContext);

    // RETORNO
    return (
        <>
            {/* Título */}
            <h1 className={ titleStyle }> Login </h1>

            {/* Contexto del Usuario */}
            <pre className={ preStyle }>
                { JSON.stringify(user, null, 3) }
            </pre>

            <div className={ buttonDivStyle }>
                {/* Botón de Establecimiento de Valores en el Contexto */}
                <button 
                    className={ buttonStyle }
                    onClick={ () => setUser({
                        id: 1,
                        name: 'Oriana Martinez',
                        email: 'martinez.oriana.e@gmail.com',
                    }) }
                > 
                    Set User 
                </button>
            </div>
        </>
    );
}
