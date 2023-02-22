/* Hooks */
import { useState } from 'react';

// COSTUM HOOK
/* Funcionalidad para el Estado del Formulario */
export const useForm = (initialForm = { }) => {
    // HOOKS
    /* Estado del Formulario */
    const [ formState, setFormState ] = useState(initialForm);

    // FUNCIONES
    /* Manejador del Cambio en un Input */
    const handleChange = ({ target }) => {
        // CONSTANTES
        /* Desestructuración del Objeto */
        const { name, value } = target;
        
        /* Asignación del Valor Ingresado al Estado del Formulario */
        setFormState({
            ...formState,
            [ name ]: value,
        });
    }
    /* Manejador de Reestablecimiento de Valores Iniciales */
    const handleReset = () => {        
        /* Asignación del Valores Iniciales al Estado del Formulario */
        setFormState(initialForm);
    }

    // RETORNO
    return {
        ...formState,
        formState,
        handleChange,
        handleReset,
    }
}
