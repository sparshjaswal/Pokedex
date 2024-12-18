import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import EvolutionChainCard from './evolutionChainCard';
import data from '../sample';
describe('EvolutionChainCard', () => {
    const mockData = {
        data: { ...data },
    };
    test('renders the correct number of evolution arrows', () => {
        render(_jsx(EvolutionChainCard, { ...mockData }));
        const arrows = screen.getAllByAltText(/right arrow icon/i);
        expect(arrows.length).toBe(2); // There should be 2 arrows for 3 elements
    });
    test('renders the correct number of Pokemon cards', () => {
        render(_jsx(EvolutionChainCard, { ...mockData }));
        const pokemonCards = screen.getAllByText(/bulbasaur/i);
        expect(pokemonCards.length).toBe(3); // Should render 3 Pokemon cards
    });
});
