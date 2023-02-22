/* Hooks */
import { useEffect, useReducer } from 'react';
/* Utils */
import { todoReducer } from '../components/08-useReducer/utils/todoReducer';

// FUNCIONES
/* Inicializador del Reducer */
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [ ];
}

// COSTUM HOOK
/* Funcionalidad para el Manejo de las Tareas */
export const useTodos = () => {
    // HOOKS
    /* Desestructuración del Reducer */
    const [ todos, dispatch ] = useReducer(todoReducer, [ ], init);
    // Efecto para el Almacenamiento de Tareas
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [ todos ]);

    // FUNCIONES
    /* Manejo de la Inserción de una Nueva Tarea */
    const handleAddTodo = (todo) => {
        dispatch({
            type: '[TODO] Add todo',
            payload: todo,
        });
    }
    /* Manejo del Estado de una Tarea */
    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle todo',
            payload: id,
        });
    }
    /* Manejo de la Eliminación de una Tarea de la Lista */
    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Delete todo',
            payload: id,
        });
    }

    // RETORNO
    return {
        /* Tareas + Propiedades */
        todos, 
        /* Propiedades */
        todosCount: todos.length, 
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        /* Manejadores de Acciones */
        handleAddTodo, handleToggleTodo, handleDeleteTodo,
    }
}
