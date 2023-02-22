/* Hooks */
import { useForm } from "../../../hooks";

// ESTILOS
/* Formulario */
const formStyle = "flex flex-col items-center justify-center";
/* Input */
const inputStyle = "p-1 pl-2 mt-6 w-72 text-md border border-gray-900 rounded-lg focus:outline-none focus:ring focus:ring-blue-300";
/* Botón */
const addButtonStyle ="py-2 px-4 mt-4 bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold rounded-full";

// COMPONENTE
/* Formulario para Agregar una Nueva Tarea */
export const TodosForm = ({ handleAddTodo }) => {
    // HOOKS
    /* Propiedades del Estado del Formulario */
    const { description, handleChange, handleReset } = useForm({ description: '' });

    // FUNCIONES
    /* Manejador del Evento submit */
    const handleSubmit = (event) => {
        event.preventDefault();

        // CONDICIONAL
        /* Validación del Ingreso de un Valor */
        if (description.length === 0) return;

        // CONSTANTES
        /* Propiedades de la Nueva Tarea */
        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false,
        }

        handleAddTodo(newTodo);
        handleReset();
    }

    // RETORNO
    return (
        <form 
            className={ formStyle }
            onSubmit={ handleSubmit }
        >
            {/* Input de una Nueva Tarea */}
            <input 
                type="text"
                name="description"
                placeholder="Escribe una nueva tarea"
                value={ description }
                className={ inputStyle }
                onChange={ handleChange }
            />

            {/* Botón de Submit */}
            <button
                type="submit"
                className={ addButtonStyle }
            >
                Agregar
            </button>
        </form>
    );
}
