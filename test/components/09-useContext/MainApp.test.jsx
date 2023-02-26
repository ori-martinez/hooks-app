import { render, screen } from '@testing-library/react';
/* Rutas */
import { MemoryRouter } from 'react-router-dom';
/* Components */
import { MainApp } from '../../../src/components/09-useContext/MainApp';

describe('Pruebas de <MainApp />', () => {
    // PRUEBA DE FUNCIONALIDAD DEL COMPONENTE POR DEFECTO CON <Home />
    test('El componente debe mostrar por defecto la página <Home />', () => {
        /* Renderización del Componente */
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        // CONSTANTES
        /* Elemento h2 */
        const h2 = screen.getByRole('heading', { level: 2 });

        expect(h2.innerHTML).toContain('Home');
    });

    // PRUEBA DE FUNCIONALIDAD DEL COMPONENTE CON <Login />
    test('El componente debe mostrar la página <Login />', () => {
        /* Renderización del Componente */
        render(
            <MemoryRouter initialEntries={ [ '/login' ] }>
                <MainApp />
            </MemoryRouter>
        );

        // CONSTANTES
        /* Elemento h2 */
        const h2 = screen.getByRole('heading', { level: 2 });

        expect(h2.innerHTML).toContain('Login');
    });

    // PRUEBA DE FUNCIONALIDAD DEL COMPONENTE CON <About />
    test('El componente debe mostrar la página <About />', () => {
        /* Renderización del Componente */
        render(
            <MemoryRouter initialEntries={ [ '/about' ] }>
                <MainApp />
            </MemoryRouter>
        );

        // CONSTANTES
        /* Elemento h2 */
        const h2 = screen.getByRole('heading', { level: 2 });

        expect(h2.innerHTML).toContain('About');
    });
})
