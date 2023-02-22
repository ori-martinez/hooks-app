import { screen, render } from '@testing-library/react'
/* Components */
import { TodoApp } from '../../../src/components/08-useReducer/TodoApp';
/* Hooks */
import { useTodos } from '../../../src/hooks';

// MOCKS
/* Simulación del Hook useTodos() */
jest.mock('../../../src/hooks/useTodos');

describe('Preubas de <TodoApp />', () => {
    /* Valores del Mock useTodos() */
    useTodos.mockReturnValue({
        todos: [
            { id: 1, description: 'Buscar la gema de la Realidad', done: false, },
            { id: 2, description: 'Buscar la gema del Tiempo', done: true, },
        ],
        todosCount: 2, 
        pendingTodosCount: 1,
        handleAddTodo: jest.fn(), 
        handleToggleTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
    });

    // PRUEBA DE FUNCIONALIDAD DEL COMPONENTE POR DEFECTO
    test('El componente se debe mostrar correctamente', () => {
        /* Renderización del Componente */
        render(<TodoApp />);

        expect(screen.getByText('Buscar la gema de la Realidad')).toBeTruthy();
        expect(screen.getByText('Buscar la gema del Tiempo')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
        expect(screen.getByRole('textbox').name).toBe('description');
    });
    
})
