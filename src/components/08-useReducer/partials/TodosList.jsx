/* Components */
import { MessageItem, TodoItem } from './index';

// ESTILOS
/* Lista */
const listStyle = "p-4 pb-2 w-3/4 text-base bg-blue-100 border border-2 border-blue-900 rounded-xl";

// COMPONENTE
/* Lista de Tareas */
export const TodosList = ({ todos, handleToggleTodo, handleDeleteTodo }) => (
    <ul className={ listStyle }>
        { // CONDICIONAL
        /* Validación de la Existencia de Tareas */
        (todos.length === 0)
            /* Mensaje */
            ? <MessageItem message="No hay tareas" />
            /* Items */
            : todos.map(todo => (
                <TodoItem
                    key={ todo.id }
                    id={ todo.id }
                    description={ todo.description }
                    done={ todo.done }
                    handleToggleTodo={ handleToggleTodo }
                    handleDeleteTodo={ handleDeleteTodo }
                />
            ))
        }
    </ul>
);
