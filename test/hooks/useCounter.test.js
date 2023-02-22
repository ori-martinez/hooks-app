import { act, renderHook } from '@testing-library/react';
/* Hooks */
import { useCounter } from '../../src/hooks';

describe('Pruebas del hook useCounter()', () => {
    // PRUEBA DE FUNCIONALIDAD DE LOS VALORES POR DEFECTO
    test('El hook debe retornar los valores por defecto', () => {
        // CONSTANTES
        /* Resultado de la Renderización del Hook */
        const { result } = renderHook(() => useCounter());
        /* Desestructuración del Resultado */
        const { counter, increment, decrement, reset } = result.current;

        expect(counter).toBe(0);
        expect(increment).toEqual(expect.any(Function));
        expect(decrement).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    // PRUEBA DE FUNCIONALIDAD DEL counter
    test('El counter se debe generar con los valores mandados en los parámetros', () => {
        // CONSTANTES
        /* Resultado de la Renderización del Hook */
        const { result } = renderHook(() => useCounter(100));
        /* Desestructuración del counter del Resultado */
        const { counter } = result.current;

        expect(counter).toBe(100);
    });

    // PRUEBA DE FUNCIONALIDAD DEL increment
    test('El increment debe incrementar el valor del counter', () => {
        // CONSTANTES
        /* Resultado de la Renderización del Hook */
        const { result } = renderHook(() => useCounter(100));
        /* Desestructuración del increment del Resultado */
        const { increment } = result.current;

        /* Ejecución de la Función */
        act(() => {
            increment();
            increment(2)
        });

        expect(result.current.counter).toBe(103);
    });

    // PRUEBA DE FUNCIONALIDAD DEL decrement
    test('El decrement debe decrementar el valor del counter', () => {
        // CONSTANTES
        /* Resultado de la Renderización del Hook */
        const { result } = renderHook(() => useCounter(100));
        /* Desestructuración del decrement del Resultado */
        const { decrement } = result.current;

        /* Ejecución de la Función */
        act(() => {
            decrement();
            decrement(2)
        });

        expect(result.current.counter).toBe(97);

    });

    // PRUEBA DE FUNCIONALIDAD DEL reset
    test('El reset debe reestablecer el valor inicial del counter', () => {
        // CONSTANTES
        /* Resultado de la Renderización del Hook */
        const { result } = renderHook(() => useCounter(100));
        /* Desestructuración del reset del Resultado */
        const { increment, reset } = result.current;

        /* Ejecución de la Función */
        act(() => {
            increment(5);
            reset();
        });

        expect(result.current.counter).toBe(100);
    });
})
