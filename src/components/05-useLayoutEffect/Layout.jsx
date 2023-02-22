/* Components */
import { SpinnerGradient, CharacterCard } from './partials';
/* Hooks */
import { useCounter, useFetch } from '../../hooks';

// ESTILOS
/* Contenedor */
const buttonDivStyle = "flex items-center justify-center";
/* Textos */
const h1Style = "p-2 mt-8 text-center text-2xl text-blue-600 font-bold";
const h2Style = "text-center text-slate-600 text-xl font-semibold";
/* Botón */
const buttonStyle ="py-2 px-6 mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full";

// COMPONENTE
/* Carta de Información Dinámica usando Múltiples Costum Hooks */
export const Layout = () => {
    // HOOKS
    /* Contador */
    const { counter, randomize } = useCounter(826);
    /* Desestructuración del useFetch() */
    const { data, isLoading } = useFetch(`https://rickandmortyapi.com/api/character/${ counter }`);

    // CONSTANTES
    /* Destructuración de los Datos */
    const { id, image, name, origin, status, species } =
    // CONDICIONAL
    /* Validación de la Obtención de Datos */
    !! data && data;

    // RETORNO
    return (
        <>
            {/* Título */}
            <h1 className={ h1Style }> Uso de Múltiples Costum Hooks + useLayoutEffect() </h1>

            {/* Subtítulo */}
            <h2 className={ h2Style }> Personaje de Ricky y Morty </h2>

            {// CONDICIONAL
            /* Validación del Estado de Carga de los Datos */
            (isLoading)
                ? <SpinnerGradient />
                /* Carta de Información del Personaje */ 
                : <CharacterCard
                    id={ id }
                    image={ image }
                    name={ name }
                    species={ species }
                    origin={ origin.name }
                    status={ status }
                />
            }

            <div className={ buttonDivStyle }>
                {/* Botón */}
                <button 
                    className={ buttonStyle }
                    onClick={ () => randomize(1, 826) }
                > 
                    ¡Randomize!
                </button>
            </div>
        </> 
    );
}