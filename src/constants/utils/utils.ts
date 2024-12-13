import { PokemonType, POKEMON_TYPE, PokemonTypesData, PokemonDescriptionData } from "../pokemon.types";

export const getPokemonBgColor = (type: PokemonType): string => {
  return POKEMON_TYPE[type] ? POKEMON_TYPE[type].color : "C0DFDD";
};

export const getBackground = (pokemonTypes: PokemonTypesData[]): string => {
  let color = "";
  if (pokemonTypes.length) {
    const { type: { name: pokemonTypeOne } } = pokemonTypes[0];
    if (pokemonTypes.length > 1) {
      const { type: { name: pokemonTypeTwo } } = pokemonTypes[1];
      color = `linear-gradient(180deg, ${getPokemonBgColor(pokemonTypeOne)} 0%, ${getPokemonBgColor(pokemonTypeTwo)} 100%)`;
    } else {
      color = getPokemonBgColor(pokemonTypeOne);
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

export const getCamelCaseString = (str: string): string => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};