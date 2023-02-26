import { render, screen } from '@testing-library/react';
/* Contexto */
import { UserContext } from '../../../../src/components/09-useContext/context/UserContext';
/* Páginas */
import { Home } from '../../../../src/components/09-useContext/pages';

describe('Pruebas de <Home />', () => {
    // CONSTANTES
    /* Datos del Usuario de Prueba */
    const user = { id: 1, name: 'Oriana', }

    // PRUEBA DE FUNCIONALIDAD DE LA PAGINA POR DEFECTO
    test('La página se debe mostrar sin el usuario', () => {
        /* Renderización de la Página */
        render(
            <UserContext.Provider value={ { user: null } }>
                <Home />
            </UserContext.Provider>
        );

        // CONSTANTES
        /* Elemento pre */
        const pre = screen.getByLabelText('pre');

        expect(pre.innerHTML).toBe('null');
    });

    // PRUEBA DE FUNCIONALIDAD DE LA PAGINA CON DATOS DEL CONTEXTO
    test('La página se debe mostrar con el usuario', () => {
        /* Renderización de la Página */
        render(
            <UserContext.Provider value={ { user } }>
                <Home />
            </UserContext.Provider>
        );

        // CONSTANTES
        /* Elemento pre */
        const pre = screen.getByLabelText('pre');

        expect(pre.innerHTML).toContain(`${ user.id }`);
        expect(pre.innerHTML).toContain(user.name);
    });
})
