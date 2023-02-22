/* Hooks */
import { useState } from 'react';

// FUNCIONES
/* Obtención de un Número Aleatorio dentro de un Rango */
const randomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// COSTUM HOOK
/* Funcionalidad de un Contador */
export const useCounter = (initialValue = 0) => {
    // CONSTANTES
    /* Estado del Contador */
    const [counter, setCounter] = useState(initialValue);

    // FUNCIONES
    /* Incremento del Valor */
    const increment = (value = 1) => setCounter(
        current => current + value
    );
    /* Decremento del Valor */
    const decrement = (value = 1) => {
        // CONDICIONAL
        /* Validación del Contador Diferente de Cero */
        if (counter === 0) return;

        setCounter(
            current => current - value
        );
    }
    /* Reestablecimiento del Valor Inicial */
    const reset = () => setCounter(initialValue);
    /* Valor Aleatorio */
    const randomize = (min = 1, max = 100) => setCounter(randomNumberInRange(min, max));

    // RETORNO
    return {
        /* Valor del Contador */
        counter,
        /* Funciones */
        increment, decrement, reset, randomize
    }
}

/* __________________________________________________________________________________________________________

NOTAS:
    1. Al establecer que las funciones increment() y decrement() reciban un parámetro value, permiten que el
contador haga un incremento o decremento con salto igual al value asignado
    2. Sin embargo, al definir dichas funciones como ejecución al hacer click en un botón, se deben pasar 
como un arrow function (onClick={ () => increment(2) }). De esa forma, se evita recibir el objeto del evento
y no se afecta la lógica de la función para incrementar/decrementar el contador
__________________________________________________________________________________________________________ */
