import { renderHook, waitFor } from '@testing-library/react';
/* Hooks */
import { useFetch } from '../../src/hooks';

describe('Pruebas del hook useFetch()', () => {
    // PRUEBA DE FUNCIONALIDAD DE LOS VALORES POR DEFECTO
    test('El hook debe retornar los valores por defecto', () => {
        // CONSTANTES
        /* Resultado de la Renderización del Hook */
        const { result } = renderHook(() => useFetch('https://rickandmortyapi.com/api/character/1'));
        /* Desestructuración del Resultado */
        const { data, isLoading, hasError } = result.current;

        expect(data).toBeNull();
        expect(isLoading).toBeTruthy();
        expect(hasError).toBeNull()
    });

    // PRUEBA DE FUNCIONALIDAD DEL useEffect() EN EL HOOK
    test('El hook debe retornar un arreglo con los datos, el isLoading en false y el hasError en null', async () => {
        // CONSTANTES
        /* Resultado de la Renderización del Hook */
        const { result } = renderHook(() => useFetch('https://rickandmortyapi.com/api/character/1'));
        
        /* Función que Espera un Cambio en el Hook useFetch() */
        await waitFor(
            () => expect(result.current.data).not.toBeNull()
        );

        // CONSTANTES
        /* Propiedades Actuales del Resultado */
        const { data, isLoading, hasError } = result.current;
        
        expect(data).toEqual(expect.any(Object));
        expect(isLoading).toBeFalsy();
        expect(hasError).toBeNull();
    });
})
