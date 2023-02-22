// ESTILOS
/* Contenedores */
const mainDivStyle = "mt-6 flex items-center justify-center";
const colorDivStyle = "w-16 h-16 relative bg-gradient-to-r from-blue-500 to-slate-300 rounded-full animate-spin";
const centerDivStyle = "top-1/2 left-1/2 w-12 h-12 absolute bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2";

// COMPONENTE
/* Spinner de Carga con Gradientes */
export const SpinnerGradient = () => (
    <div className={ mainDivStyle }>
        <div className={ colorDivStyle }>
            <div className={ centerDivStyle }> </div>
        </div>
    </div>
);
