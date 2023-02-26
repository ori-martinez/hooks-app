import { fireEvent, render, screen } from '@testing-library/react';
/* Contexto */
import { UserContext } from '../../../../src/components/09-useContext/context/UserContext';
/* Páginas */
import { Login } from '../../../../src/components/09-useContext/pages';

describe('Pruebas de <Login />', () => {
    // CONSTANTES
    /* Propiedades del Usuario de Prueba */
    const user = {
        id: 1,
        name: 'Oriana Martinez',
        email: 'martinez.oriana.e@gmail.com',
    }
    /* Funciones Simuladas con Jest (Mock) */
    const setUserMock = jest.fn();

    // PRUEBA DE FUNCIONALIDAD DE LA PAGINA POR DEFECTO
    test('La página se debe mostrar sin el usuario', () => {
        /* Renderización de la Página */
        render(
            <UserContext.Provider value={ { user: null } }>
                <Login />
            </UserContext.Provider>
        );

        // CONSTANTES
        /* Elemento pre */
        const pre = screen.getByLabelText('pre');

        expect(pre.innerHTML).toBe('null');
    });

    // PRUEBA DE FUNCIONALIDAD DE LA FUNCION handleToggleTodo()
    test('El click del botón en la página debe llamar a la función setUser()', () => {
        /* Renderización de la Página */
        render(
            <UserContext.Provider value={ { user: null, setUser: setUserMock } }>
                <Login />
            </UserContext.Provider>
        );

        // CONSTANTES
        /* Elemento button */
        const button = screen.getByRole('button');

        /* Simulación del Evento */
        fireEvent.click(button);

        expect(setUserMock).toHaveBeenCalledWith(user);
    });
})
