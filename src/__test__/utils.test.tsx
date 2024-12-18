import {   getBackground, getPokemonDescription, getCamelCaseString, getPokemonBgColor } from '../constants/utils';
import { POKEMON_TYPE, PokemonTypesData } from '../constants/pokemon.types';

describe('Pokemon Utils', () => {
  describe('getPokemonBgColor', () => {
    it('should return the correct color for a given Pokemon type', () => {
      expect(getPokemonBgColor('fire')).toBe(POKEMON_TYPE['fire'].color);
      expect(getPokemonBgColor('water')).toBe(POKEMON_TYPE['water'].color);
    });
  });

  describe('getBackground', () => {
    it('should return a linear gradient for two types', () => {
      const types = [{ type: { name: 'fire' } }, { type: { name: 'water' } }];
      const expectedColor = `linear-gradient(180deg, ${POKEMON_TYPE['fire'].color} 0%, ${POKEMON_TYPE['water'].color} 100%)`;
      expect(getBackground(types as PokemonTypesData[])).toBe(expectedColor);
    });

    it('should return a single color for one type', () => {
      const types = [{ type: { name: 'grass' } }];
      expect(getBackground(types as PokemonTypesData[])).toBe(POKEMON_TYPE['grass'].color);
    });

    it('should return an empty string for no types', () => {
      expect(getBackground([])).toBe("");
    });
  });

  describe('getPokemonDescription', () => {
    it('should return a concatenated string of unique English descriptions', () => {
      const data = [
        { language: { name: 'en' }, flavor_text: 'This is a test.' },
        { language: { name: 'en' }, flavor_text: 'This is a test.' }, // Duplicate
        { language: { name: 'fr' }, flavor_text: 'Ceci est un test.' },
        { language: { name: 'en' }, flavor_text: 'Another test.' },
      ];
      expect(getPokemonDescription(data)).toBe('This is a test.Another test.');
    });

    it('should return an empty string for no data', () => {
      expect(getPokemonDescription([])).toBe("");
    });
  });

  describe('getCamelCaseString', () => {
    it('should return a camel case string', () => {
      expect(getCamelCaseString('hello')).toBe('Hello');
      expect(getCamelCaseString('')).toBe('');
    });
  });
});