/* Components */
import { TodosForm, TodosList } from './partials';
/* Hooks */
import { useTodos } from '../../hooks';

// ESTILOS
/* Contenedores */
const mainDivStyle = "mt-4 mx-12 grid grid-cols-3 gap-6";
const listDivStyle = "w-full flex flex-col items-center justify-center col-span-2";
const formDivStyle = "w-full flex flex-col items-center justify-center";
/* Textos */
const h1Style = "p-2 mt-8 mb-2 text-center text-2xl text-blue-600 font-bold";
const h2Style = "text-center text-xl font-semibold";
const h3Style = "text-center text-lg text-blue-900 font-bold";

// COMPONENTE
/* Lista de Tareas */
export const TodoApp = () => {
    // HOOKS
    /* Desestructuración de las Propiedades para el Manejo de las Tareas */
    const { 
        /* Tareas + Propiedades */
        todos, todosCount, pendingTodosCount,
        /* Manejadores de Acciones */
        handleAddTodo, handleToggleTodo, handleDeleteTodo,
    } = useTodos();

    // RETORNO
    return (
        <>
            {/* Título */}
            <h1 className={ h1Style }> Lista de Tareas </h1>

            {/* Subtítulo */}
            <h2 className={ h2Style }> Total: { todosCount } - Pendientes: { pendingTodosCount } </h2>

            <div className={ mainDivStyle }>
                <div className={ listDivStyle }>
                    {/* Lista de Tareas */}
                    <TodosList 
                        todos={ todos }
                        handleToggleTodo={ handleToggleTodo }
                        handleDeleteTodo={ handleDeleteTodo }
                    />
                </div>
                <div className={ formDivStyle }>
                    {/* Subtítulo */}
                    <h3 className={ h3Style }> Agregar una Tarea </h3>

                    {/* Formulario */}
                    <TodosForm handleAddTodo={ handleAddTodo } />
                </div>
            </div>
        </>
    );
}
