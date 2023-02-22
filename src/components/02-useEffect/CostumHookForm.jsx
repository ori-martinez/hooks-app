/* Components */
import { Button } from './partials/index';
/* Hooks */
import { useForm } from '../../hooks/index';

// ESTILOS
/* Contenedor */
const divStyle = "mt-4 flex flex-col items-center justify-center";
/* Textos */
const h1Style = "p-2 mt-8 text-center text-2xl text-blue-600 font-bold";
/* Input */
const inputStyle = "p-1 pl-2 my-2 w-72 text-md border border-gray-900 rounded-lg focus:outline-none focus:ring focus:ring-blue-300";

// COMPONENTE
/* Formulario con Costum Hook */
export const CostumHookForm = () => {
    // HOOKS
    /* Propiedades del Estado del Formulario */
    const { 
        /* Manejadores de Eventos */
        handleChange, handleReset,
        /* Destructuración del Estado */ 
        username, email, password
    } 
    = useForm({
        username: '',
        email: '',
        password: '',
    });

    // RETORNO
    return (
        <>
            {/* Título */}
            <h1 className={ h1Style }> Formulario con Custom Hook: useForm() </h1>

            <div className={ divStyle }>
                {/* Input de Usuario */}
                <input 
                    type="text"
                    name="username"
                    placeholder="Usuario"
                    value={ username }
                    className={ inputStyle }
                    onChange={ handleChange }
                />
                
                {/* Input de Email */}
                <input 
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={ email }
                    className={ inputStyle }
                    onChange={ handleChange }                
                />

                {/* Input de Contraseña */}
                <input 
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={ password }
                    className={ inputStyle }
                    onChange={ handleChange }                
                />

                <Button 
                    textButton="Reset"
                    onClick={ handleReset }
                />
            </div>
        </>
    );
}
