// ESTILOS
/* Botón */
const buttonStyle ="py-2 px-4 mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full";

// COMPONENTE
/* Botón Simple */
export const Button = ({ textButton, onClick }) => (
    <button 
        className={ buttonStyle }
        onClick={ onClick }
    > 
        { textButton } 
    </button>
);
