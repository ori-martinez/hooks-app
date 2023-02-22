/* Hooks */
import { useEffect, useState } from 'react';

// COSTUM HOOK
/* Llamada de un API */
export const useFetch = (url) => {
    // HOOKS
    /* Estado de la Llamada del API*/
    const [ state, setState ] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });

    // FUNCIONES
    /* Obtención Asíncrona de los Datos del API */
    const getFetch = async () => {
        /* Asignación del Valor de Carga del Estado de la Llamada */
        setState({
            ...state,
            isLoading: true,
        });

        // CONSTANTES
        /* Respuesta del Llamado al API */
        const response = await fetch(url);
        /* Obtención de los Datos de la Respuesta */
        const data = await response.json();

        /* Asignación de los Valores Recibidos al Estado de la Llamada */
        setState({
            data,
            isLoading: false,
            hasError: null,
        });
    }

    // HOOKS
    /* Efecto para el Cambio de la Variable url */
    useEffect(() => {
        getFetch();
    }, [ url ]);

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
}
