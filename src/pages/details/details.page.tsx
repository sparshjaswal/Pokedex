import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import DetailPage from './details.page.test';
import { getPokemonDataById, getSpeciesDataById, getPokemonTypesById } from '../../services/common.service';

// Mock the service functions
jest.mock('../../services/common.service', () => ({
    getPokemonDataById: jest.fn(),
    getSpeciesDataById: jest.fn(),
    getPokemonTypesById: jest.fn(),
}));

describe('DetailPage', () => {
    const mockToggleModal = jest.fn();
    const mockPokemonData = {
        id: 1,
        name: 'Bulbasaur',
        stats: [{ base_stat: 45, stat: { name: 'hp' } }],
    };
    const mockSpeciesData = { habitat: { name: 'grassland' } };
    const mockTypeData = { types: [{ type: { name: 'grass' } }] };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders loading state initially', () => {
        render(<DetailPage isCardSelected={true} toggleModal={mockToggleModal} pokemonId={1} offset={10} />);
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    test('renders Pokémon details when data is available', async () => {
        getPokemonDataById.mockResolvedValue(mockPokemonData);
        getSpeciesDataById.mockResolvedValue(mockSpeciesData);
        getPokemonTypesById.mockResolvedValue(mockTypeData);

        await act(async () => {
            render(<DetailPage isCardSelected={true} toggleModal={mockToggleModal} pokemonId={1} offset={10} />);
        });

        await waitFor(() => expect(getPokemonDataById).toHaveBeenCalledWith(1));
        await waitFor(() => expect(getSpeciesDataById).toHaveBeenCalledWith(1));
        await waitFor(() => expect(getPokemonTypesById).toHaveBeenCalledWith(1));

        expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
        expect(screen.getByText(/hp/i)).toBeInTheDocument();
        expect(screen.getByText(/grass/i)).toBeInTheDocument();
        expect(screen.getByText(/grassland/i)).toBeInTheDocument();
    });

    test('handles forward and backward navigation', async () => {
        getPokemonDataById.mockResolvedValue(mockPokemonData);
        getSpeciesDataById.mockResolvedValue(mockSpeciesData);
        getPokemonTypesById.mockResolvedValue(mockTypeData);

        await act(async () => {
            render(<DetailPage isCardSelected={true} toggleModal={mockToggleModal} pokemonId={1} offset={10} />);
        });

        await waitFor(() => expect(getPokemonDataById).toHaveBeenCalledWith(1));

        const forwardButton = screen.getByRole('button', { name: /forward/i });
        const backwardButton = screen.getByRole('button', { name: /back/i });

        fireEvent.click(forwardButton);
        expect(getPokemonDataById).toHaveBeenCalledWith(2);

        fireEvent.click(backwardButton);
        expect(getPokemonDataById).toHaveBeenCalledWith(1);
    });

    test('closes the modal', async () => {
        await act(async () => {
            render(<DetailPage isCardSelected={true} toggleModal={mockToggleModal} pokemonId={1} offset={10} />);
        });

        const closeButton = screen.getByRole('button', { name: /close/i });
        fireEvent.click(closeButton);

        expect(mockToggleModal).toHaveBeenCalled();
    });
});