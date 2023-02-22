/* Contexto */
import { UserContext } from './UserContext';
/* Hooks */
import { useState } from 'react';

// CONSTANTES
/* Datos de Usuario para la Demostración */
/* const user = {
    id: 1,
    name: 'Oriana Martinez',
    email: 'martinez.oriana.e@gmail.com',
} */

// COMPONENTE
/* Proveedor del Contexto del Usuario */
export const UserProvider = ({ children }) => {
    // HOOKS
    /* Estado del Usuario */
    const [ user, setUser ] = useState();

    // RETORNO
    return (
    // <UserContext.Provider value={ { hello: 'World', user, } }>
    <UserContext.Provider value={ { user, setUser } }>
        { children }
    </UserContext.Provider>
);}
