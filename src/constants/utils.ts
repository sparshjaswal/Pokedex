import { PokemonType, POKEMON_TYPE, PokemonTypeData, PokemonDescriptionData } from "./pokemon.types";

export const getPokcolor = (type: PokemonType): string => {
  return POKEMON_TYPE[type]?.color || 'transparent'; // Return a default color if type is not found
};

export const getBackground = (pokemonTypes: PokemonTypeData[]): string => {
  let color = "";
  if (pokemonTypes.length) {
    const { type: { name: pokemontype1 } } = pokemonTypes[0];
    if (pokemonTypes.length > 1) {
      const { type: { name: pokemontype2 } } = pokemonTypes[1];
      color = `linear-gradient(180deg, ${getPokcolor(pokemontype1)} 0%, ${getPokcolor(pokemontype2)} 100%)`;
    } else {
      color = getPokcolor(pokemontype1);
    }
  }
  return color;
};


export const getPokemonDescription = (data: PokemonDescriptionData[]): string => {
  if (data.length) {
    let uniqueTextArray: string[] = [];
    return data.reduce((acc, next) => {
      if (next.language.name === "en" && !uniqueTextArray.includes(next.flavor_text)) {
        uniqueTextArray.push(next.flavor_text);
        return acc += next.flavor_text.replace(/\n|\f/g, " ");
      }
      return acc;
    }, "");
  }
  return "";
};

export const getCamleCaseString = (str: string): string => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};