// ESTILOS
/* Item */
const liStyle = "p-1 mb-2 w-full flex flex-row items-center justify-center bg-white border border-gray-900 rounded-xl";
const spanStyle = "py-1 ml-4 text-lg text-blue-900 font-semibold";

// COMPONENTE
/* Item de la Lista de Tarea */
export const MessageItem = ({ message }) => (
    <li className={ liStyle }>
        {/* Mensaje */}
        <span className={ spanStyle }> { message } </span>
    </li>
);
