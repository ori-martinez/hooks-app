/* Rutas */
import { Navigate, Route, Routes } from 'react-router-dom';
/* Contexto */
import { UserProvider } from './context/UserProvider';
/* Componentes */
import { Navbar } from './partials';
/* Páginas */
import { About, Home, Login } from './pages';

// ESTILOS
/* Texto */
const mainTitleStyle = "p-2 mt-8 text-center text-4xl font-bold";
/* Separador */
const hrStyle = " mx-auto my-6 w-4/5 h-1 bg-cyan-400 border-0 rounded";

// COMPONENTE
/* Aplicación Principal */
export const MainApp = () => {
    return (
        <UserProvider>
            {/* Barra de Navegación */}
            <Navbar />

            {/* Título Princiapl */}
            <h1 className={ mainTitleStyle }> Main App </h1>

            {/* Separador */}
            <hr className={ hrStyle } />

            {/* RUTAS */}
            <Routes>
                {/* Principal */}
                <Route path='/' element={ <Home /> } />
                {/* Login */}
                <Route path='login' element={ <Login /> } />
                {/* Información */}
                <Route path='about' element={ <About /> } />
                {/* Redirección */}
                <Route path='/*' element={ <Navigate to='login' /> } />
            </Routes>
        </UserProvider>
    );
}

/* __________________________________________________________________________________________________________

NOTAS:
    1. El BrowserRouter, el UserContext y el UserProvider son componentes Higher-Order; es decir, estos
transforman un componente en otro componente agregando información a sus propiedades
    2. Cabe destacar, los componentes Higher-Order deben ubicarse en la raíz del árbol de componentes
implementado dentro del proyecto; de modo que, las propiedades que estos aportan se extiendan a todos los 
componentes hijos
    3. Para que el componente UserProvider proporcione propiedades a sus componentes hijos, debe definirse un
atributo value. Es recomendable definir el value como un objeto, definiendo tantas propiedades como 
información sea necesaria proveer a los componentes hijos
__________________________________________________________________________________________________________ */
