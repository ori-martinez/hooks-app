import { fireEvent, render, screen } from '@testing-library/react';
/* Components */
import { MultipleCostumHooks } from '../../../src/components/03-extras/MultipleCostumHooks';
/* Hooks */
import { useCounter, useFetch } from '../../../src/hooks';

// MOCKS
/* Simulación del Hook useFetch() */
jest.mock('../../../src/hooks/useFetch');
/* Simulación del Hook useCounter() */
jest.mock('../../../src/hooks/useCounter');

describe('Pruebas del <MultipleCostumHooks />', () => {
    // CONSTANTES
    /* Función Simulada con Jest (Mock) */
    const mockRandomize = jest.fn();
        
    /* Valores del Mock useFetch() */
    useCounter.mockReturnValue({
        counter: 826,
        randomize: mockRandomize,
    });

    /* Limpieza de los Mocks entre las Pruebas */
    beforeEach(() => jest.clearAllMocks());

    // PRUEBA DE FUNCIONALIDAD DEL COMPONENTE POR DEFECTO
    test('La carga inicial debe mostrar el componente por defecto', () => {
        /* Valores del Mock useFetch() */
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        });
        /* Renderización del Componente */
        render(<MultipleCostumHooks />);

        expect(screen.getByText('Personaje de Ricky y Morty'));
        expect(screen.getByLabelText('Spinner'));

        // CONSTANTE
        /* Elemento button */
        const randomizeButton = screen.getByRole('button', { name: '¡Randomize!' });

        expect(randomizeButton.disabled).toBeFalsy();
    });

    // PRUEBA DE FUNCIONALIDAD DEL COMPONENTE CON DATOS DEL useFetch()
    test('La carga de datos con el useFetch() debe mostrar el componente con la información del personaje', () => {
        /* Valores del Mock useFetch() */
        useFetch.mockReturnValue({
            data: {
                image: 'https://rickandmortyapi.com/api/character/avatar/826.jpeg',
                name: 'Butter Robot',
                origin: {
                    name: 'Earth (Replacement Dimension)',
                    url: 'https://rickandmortyapi.com/api/location/20'
                },
                status: 'Alive',
                species: 'Robot',
            },
            isLoading: false,
            hasError: null,
        });
        /* Renderización del Componente */
        render(<MultipleCostumHooks />);

        expect(screen.getByText('Butter Robot')).toBeTruthy();
        expect(screen.getByText('Earth (Replacement Dimension)')).toBeTruthy();
        expect(screen.getByText('Alive')).toBeTruthy();
        expect(screen.getByText('Robot')).toBeTruthy();
    });

    // PRUEBA DE FUNCIONALIDAD DE LA FUNCION randomize
    test('El click del button en el componente debe llamar a la función randomize()', () => {
        /* Valores del Mock useFetch() */
        useFetch.mockReturnValue({
            data: {
                image: 'https://rickandmortyapi.com/api/character/avatar/826.jpeg',
                name: 'Butter Robot',
                origin: {
                    name: 'Earth (Replacement Dimension)',
                    url: 'https://rickandmortyapi.com/api/location/20'
                },
                status: 'Alive',
                species: 'Robot',
            },
            isLoading: false,
            hasError: null,
        });
        /* Renderización del Componente */
        render(<MultipleCostumHooks />);

        // CONSTANTE
        /* Elemento button */
        const randomizeButton = screen.getByRole('button', { name: '¡Randomize!' });

        /* Simulación del Evento */
        fireEvent.click(randomizeButton);

        expect(mockRandomize).toHaveBeenCalled();
    });
});
