import { fireEvent, render, screen } from '@testing-library/react';
/* Components */
import { TodoItem } from '../../../../src/components/08-useReducer/partials';

describe('Pruebas del <TodoItem />', () => {
    // CONSTANTES
    /* Propiedades del Todo de Prueba */
    const todo = {
        id: 1,
        description: 'Buscar la gema de la Realidad',
        done: false,
    }

    // CONSTANTES
    /* Funciones Simuladas con Jest (Mock) */
    const handleToggleTodoMock = jest.fn();
    const handleDeleteTodoMock = jest.fn();

    /* Limpieza de los Mocks entre las Pruebas */
    beforeEach(() => jest.clearAllMocks());

    // PRUEBA DE FUNCIONALIDAD DEL COMPONENTE POR DEFECTO
    test('El componente debe mostrar la información del Todo', () => {
        /* Renderización del Componente */
        render(<TodoItem 
            id={ todo.id }
            description={ todo.description }
            done={ todo.done }
            handleToggleTodo={ handleToggleTodoMock }
            handleDeleteTodo={ handleDeleteTodoMock }
        />);

        // CONSTANTES
        /* Elemento li */
        const li = screen.getByRole('listitem');
        /* Elemento span */
        const span = screen.getByLabelText('span');
        /* Elemento p */
        const p = screen.getByLabelText('p');

        expect(li.className).toBe('p-1 mb-2 w-full grid grid-cols-5 gap-1 bg-white border border-gray-900 rounded-xl');
        expect(span.className).toContain('cursor-pointer');
        expect(p.className).toContain('text-gray-500');
        expect(p.className).not.toContain('text-lime-500');
    });

    // PRUEBA DE FUNCIONALIDAD DEL COMPONENTE CON UNA TAREA FINZALIZADA
    test('El componente debe mostrar los estilos de Tarea Finalizada para el Todo', () => {
        /* Asignación en true de la Propiedad done */
        todo.done = true;

        /* Renderización del Componente */
        render(<TodoItem 
            id={ todo.id }
            description={ todo.description }
            done={ todo.done }
            handleToggleTodo={ handleToggleTodoMock }
            handleDeleteTodo={ handleDeleteTodoMock }
        />);

        // CONSTANTES
        /* Elemento p */
        const p = screen.getByLabelText('p');

        expect(p.className).toContain('text-lime-500');
        expect(p.className).not.toContain('text-gray-500');
    });

    // PRUEBA DE FUNCIONALIDAD DE LA FUNCION handleToggleTodo()
    test('El click del span en el componente debe llamar a la función handleToggleTodo()', () => {
        /* Renderización del Componente */
        render(<TodoItem 
            id={ todo.id }
            description={ todo.description }
            done={ todo.done }
            handleToggleTodo={ handleToggleTodoMock }
            handleDeleteTodo={ handleDeleteTodoMock }
        />);

        // CONSTANTES
        /* Elemento span */
        const span = screen.getByLabelText('span');

        /* Simulación del Evento */
        fireEvent.click(span);

        expect(handleToggleTodoMock).toHaveBeenCalledWith(todo.id);
    });
    
    // PRUEBA DE FUNCIONALIDAD DE LA FUNCION handleToggleTodo()
    test('El click del button en el componente debe llamar a la función handleDeleteTodo()', () => {
        /* Renderización del Componente */
        render(<TodoItem 
            id={ todo.id }
            description={ todo.description }
            done={ todo.done }
            handleToggleTodo={ handleToggleTodoMock }
            handleDeleteTodo={ handleDeleteTodoMock }
        />);

        // CONSTANTES
        /* Elemento button */
        const button = screen.getByRole('button', { name: '' });

        /* Simulación del Evento */
        fireEvent.click(button);

        expect(handleDeleteTodoMock).toHaveBeenCalledWith(todo.id);
    });
})
