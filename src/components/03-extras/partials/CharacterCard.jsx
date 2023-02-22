// ESTILOS
/* Contenedores */
const mainDivStyle = "mt-8 flex flex-col items-center justify-center rounded-xl";
const nameDivStyle = "p-2 w-52 bg-blue-800 border border-2 border-slate-900";
const infoDivStyle = "p-2 w-52 border border-2 border-t-0 border-slate-900 rounded-b-xl";
/* Textos */
const nameStyle = "text-center text-white text-base font-semibold";
const pStyle = "px-2";
const spanStyle = "font-semibold";
/* Imagen */
const imgStyle = "w-52 h-60 border border-2 border-b-0 border-slate-700 rounded-t-xl object-cover";

// COMPONENTE
/* Carta de Información del Personaje */
export const CharacterCard = ({ image, name, species, origin, status }) => (
    <div className={ mainDivStyle }>
        {/* Imagen */}
        <img 
            src={ (image === undefined || image === null) ? ' - ' : image }
            alt={ (name === undefined || name === null) ? ' Imagen no Encontrada ' : name }
            className={ imgStyle } 
        />

        {/* Nombre del Personaje */}
        <div className={ nameDivStyle }>
            <p className={ nameStyle }> { (name === undefined || name === null) ? ' - ' : name } </p>
        </div>

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
    </div>
);
