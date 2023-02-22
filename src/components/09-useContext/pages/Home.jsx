/* Contexto */
import { UserContext } from '../context/UserContext';
/* Hooks */
import { useContext } from 'react';

// ESTILOS
/* Textos */
const titleStyle = "p-2 text-center text-orange-500 text-3xl font-bold";
const preStyle = "mt-8 flex justify-center text-lg";

// PAGINA
/* Vista Principal */
export const Home = () => {
    // HOOKS
    /* Obtención del Contexto del Usuario*/
    const { user } = useContext(UserContext);

    // RETORNO
    return (
        <>
            {/* Título */}
            <h1 className={ titleStyle }> Home { user?.name } </h1>

            {/* Contexto del Usuario */}
            <pre className={ preStyle }>
                { JSON.stringify(user, null, 3) }
            </pre>
        </>
    );
}
