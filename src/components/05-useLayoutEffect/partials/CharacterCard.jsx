/* Hooks */
import { useLayoutEffect, useRef, useState } from 'react';

// ESTILOS
/* Contenedores */
const mainDivStyle = "mt-8 flex flex-col items-center justify-center rounded-xl ";
const infoDivStyle = "p-2 w-52 border border-2 border-slate-900 rounded-b-xl";
const nameDivStyle = "p-2 mt-4 bg-blue-800 border border-2 border-slate-900";
/* Textos */
const nameStyle = "text-center text-white text-base font-semibold";
const pBoxSizeStyle = "px-2 py-4 text-red-600 font-bold";
const pStyle = "px-2";
const spanStyle = "font-semibold";
/* Imagen */
const imgStyle = "w-52 h-60 border border-2 border-b-0 border-slate-700 rounded-t-xl object-cover";

// COMPONENTE
/* Carta de Información del Personaje */
export const CharacterCard = ({ id, image, name, species, origin, status }) => {
    // HOOKS
    /* Referencia del p con el Nombre del Personaje */
    const pRef = useRef();
    /* Estado del Tamaño de la Caja */
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
    /* Efecto de Plantilla */
    useLayoutEffect(() => {
        // CONSTANTES
        /* Desestructuración del Elemento de la Referencia */
        const { width, height } = pRef.current.getBoundingClientRect();

        setBoxSize({
            width,
            height,
        });
    }, [ id ])

    // RETORNO
    return (
        <div className={ mainDivStyle }>
            {/* Imagen */}
            <img 
                src={ (image === undefined || image === null) ? ' - ' : image }
                alt={ (name === undefined || name === null) ? ' Imagen no Encontrada ' : name }
                className={ imgStyle } 
            />

            {/* Información del Personaje */}
            <div className={ infoDivStyle }>
                <p className={ pStyle }> 
                    <span className={ spanStyle }> Species: </span> { (species === undefined || species === null) ? ' - ' : species }
                </p>
                <p className={ pStyle }>
                    <span className={ spanStyle }> Origin: </span> { (origin === undefined || origin === null) ? ' - ' : origin }
                </p>
                <p className={ pStyle }> 
                    <span className={ spanStyle }> Status: </span> { (status === undefined || status === null) ? ' - ' : status }
                </p>
            </div>

            {/* Nombre del Personaje */}
            <div 
                className={ nameDivStyle }
                style={ {  display: 'flex' } }
            >
                <p 
                    ref={ pRef }
                    className={ nameStyle }
                > 
                    { (name === undefined || name === null) ? ' - ' : name } 
                </p>
            </div>

            <p className={ pBoxSizeStyle }> { JSON.stringify(boxSize) } </p>
        </div>
    );
}
