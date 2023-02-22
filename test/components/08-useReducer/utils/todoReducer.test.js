/* Utils */
import { todoReducer } from "../../../../src/components/08-useReducer/utils/todoReducer";

describe('Pruebas de la Función todoReducer()', () => {
    // CONSTANTES
    /* Valores Iniciales de Prueba */
    const initialState = [ {
        id: 1,
        description: 'Demo todo 01',
        done: false,
    } ];

    // PRUEBA DE FUNCIONALIDAD DE LOS VALORES INICIALES
    test('La función debe retornar los valores iniciales por defecto', () => {
        // CONSTANTES
        /* Nuevo Estado del Reducer */
        const newState = todoReducer(initialState, { });

        expect(newState).toBe(initialState);
    });

    // PRUEBA DE FUNCIONALIDAD DEL action.type === '[TODO] Add todo'
    test('La función debe agregar los valores a la lista', () => {
        // CONSTANTES
        /* Acción de Inserción */
        const action = {
            type: '[TODO] Add todo',
            payload: {
                id: 2,
                description: 'Demo todo 02',
                done: false,
            }
        }
        /* Nuevo Estado del Reducer */
        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    // PRUEBA DE FUNCIONALIDAD DEL action.type === '[TODO] Delete todo'
    test('La función debe eliminar los valores a la lista', () => {
        // CONSTANTES
        /* Acción de Eliminación */
        const action = {
            type: '[TODO] Delete todo',
            payload: 1,
        }
        /* Nuevo Estado del Reducer */
        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(0);
        expect(newState).not.toContain(action.payload);
    });

    // PRUEBA DE FUNCIONALIDAD DEL action.type === '[TODO] Toggle todo'
    test('La función debe cambiar la propiedad done de los valores en la lista', () => {
        // CONSTANTES
        /* Acción de Eliminación */
        const action = {
            type: '[TODO] Toggle todo',
            payload: 1,
        }
        /* Nuevo Estado del Reducer */
        const newState = todoReducer(initialState, action);

        expect(newState[0].done).toBe(true);

        // CONSTANTES
        /* Siguiente Estado del Reducer */
        const nextState = todoReducer(newState, action);

        expect(nextState[0].done).toBe(false);
    });
})
