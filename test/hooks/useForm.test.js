import { act, renderHook } from '@testing-library/react';
/* Hooks */
import { useForm } from '../../src/hooks';

describe('Pruebas del hook useForm()', () => {
    // CONSTANTES
    /* Valores Iniciales del Formulario */
    const initialForm = {
        name: 'Oriana',
        email: 'martinez.oriana.e@gmail.com',
    }
    /* Nuevo Valor para el Cambio */
    const newValue = 'Ariana';

    // PRUEBA DE FUNCIONALIDAD DE LOS VALORES POR DEFECTO
    test('El hook debe retornar los valores por defecto', () => {
        // CONSTANTES
        /* Resultado de la Renderización del Hook */
        const { result } = renderHook(() => useForm());
        
        expect(result.current).toEqual({
            formState: {},
            handleChange: expect.any(Function),
            handleReset: expect.any(Function),
        });
    });

    // PRUEBA DE FUNCIONALIDAD DEL initialForm
    test('El initialForm se debe asignar como formState con los valores mandados en los parámetros', () => {
        // CONSTANTES
        /* Resultado de la Renderización del Hook */
        const { result } = renderHook(() => useForm(initialForm));
        
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            handleChange: expect.any(Function),
            handleReset: expect.any(Function),
        });
    });

    // PRUEBA DE FUNCIONALIDAD DEL handleChange
    test('El handleChange debe cambiar un valor en el formState', () => {
        // CONSTANTES
        /* Resultado de la Renderización del Hook */
        const { result } = renderHook(() => useForm(initialForm));
        /* Destructuración del handleChange del Resultado */
        const { handleChange } = result.current;

        /* Ejecución de la Función */
        act(() =>
            handleChange({ target: {
                name: 'name',
                value: newValue,
            } })
        );

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);
    });

    // PRUEBA DE FUNCIONALIDAD DEL handleReset
    test('El handleReset debe reestablecer un valor inicial en el formState', () => {
        // CONSTANTES¿
        /* Resultado de la Renderización del Hook */
        const { result } = renderHook(() => useForm(initialForm));
        /* Destructuración del handleChange del Resultado */
        const { handleChange, handleReset } = result.current;

        /* Ejecución de la Función */
        act(() => {
            handleChange({ target: {
                name: 'name',
                value: newValue,
            } });
            handleReset();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
    });
})
