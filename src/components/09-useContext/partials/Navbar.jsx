/* Rutas */
import { NavLink } from 'react-router-dom';
/* Iconos */
import { TiHome, TiThLarge, TiUser } from 'react-icons/ti';

// ESTILOS
/* Contenedor */
const divStyle = "flex items-center justify-center col-span-2";
/* Barra de Navegación */
const navStyle = "py-2 grid grid-cols-4 bg-cyan-700";
/* Título */
const h1Style = "ml-6 text-orange-500 text-2xl font-bold";
/* Links */
const spanStyle = "mx-4 inline-flex items-center text-white text-lg font-semibold ease-in duration-200 hover:text-cyan-400 hover:text-xl";
const iconStyle = "mr-1";

// COMPONENTE
/* Barra de Navegación */
export const Navbar = () => (
    <nav className={ navStyle }>
        {/* Título */}
        <NavLink 
            to="/" 
            className={ ({ isActive }) => isActive ? "disabled: pointer-events-none" : "" } 
        >
            <h1 className={ h1Style }> MainApp </h1>
        </NavLink>

        <div className={ divStyle }>
            {/* Links */}
            <NavLink 
                to="/"
                className={ ({ isActive }) => isActive ? "disabled: pointer-events-none" : "" } 
            > 
                <span className={ spanStyle }> 
                    <TiHome className={ iconStyle } /> Home
                </span>
            </NavLink>
            <NavLink 
                to="/about"
                className={ ({ isActive }) => isActive ? "disabled: pointer-events-none" : "" } 
            > 
                <span className={ spanStyle }> 
                    <TiThLarge className={ iconStyle } /> About 
                </span>
            </NavLink>
            <NavLink 
                to="/login"
                className={ ({ isActive }) => isActive ? "disabled: pointer-events-none" : "" } 
            >
                <span className={ spanStyle }> 
                    <TiUser className={ iconStyle } /> Login
                </span>
            </NavLink>
        </div>
    </nav>
);
