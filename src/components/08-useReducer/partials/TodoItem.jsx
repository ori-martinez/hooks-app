/* Iconos */
import { FiTrash } from 'react-icons/fi';

// ESTILOS
/* Contenedores */
const spanDivStyle = "col-span-3 flex items-center";
const divStyle = "flex items-center justify-center";
/* Item */
const liStyle = "p-1 mb-2 w-full grid grid-cols-5 gap-1 bg-white border border-gray-900 rounded-xl";
const spanStyle = "px-2 cursor-pointer";
const pDoneFalseStyle = "text-gray-500 font-semibold";
const pDoneTrueStyle = "text-lime-500 font-semibold";
/* Botón */
const deleteButtonStyle ="p-2 bg-red-500 hover:bg-red-700 text-white text-md font-bold rounded-lg";

// COMPONENTE
/* Item de la Lista de Tarea */
export const TodoItem = ({ id, description, done, handleToggleTodo, handleDeleteTodo }) => (
    <li className={ liStyle }>
        <div className={ spanDivStyle }>
            {/* Tarea */}
            <span
                aria-label="span"
                className={ spanStyle }
                onClick={ () => handleToggleTodo(id) }
            > 
                { description } 
            </span>
        </div>

        <div className={ divStyle }>
            {/* Estado de la Tarea */}
            <p
                aria-label="p"
                className={ (done === false) ? pDoneFalseStyle : pDoneTrueStyle }
            > 
                { (done === false) ? 'Pendiente' : 'Finalizada' } 
            </p> 
        </div>

        <div className={ divStyle }>
            {/* Botón de Eliminar */}
            <button
                className={ deleteButtonStyle }
                onClick={ () => handleDeleteTodo(id) }
            >
                <FiTrash />
            </button>
        </div>
    </li>
);
