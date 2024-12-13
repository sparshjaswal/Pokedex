export type PokemonTypeObject = {
  color: string;
  hex: string;
};

export type PokemonType =
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'fairy'
  | 'shadow';

export const POKEMON_TYPE: Record<PokemonType, PokemonTypeObject> = {
  normal: { color: 'gray', hex: '#A8A878' },
  fighting: { color: 'red', hex: '#C03028' },
  flying: { color: 'lightblue', hex: '#A890F0' },
  poison: { color: 'purple', hex: '#A040B0' },
  ground: { color: 'brown', hex: '#E0C068' },
  rock: { color: 'gray', hex: '#B8A038' },
  bug: { color: 'green', hex: '#A8B820' },
  ghost: { color: 'purple', hex: '#705898' },
  steel: { color: 'silver', hex: '#B8B8D0' },
  fire: { color: 'red', hex: '#F08030' },
  water: { color: 'blue', hex: '#6890F0' },
  grass: { color: 'green', hex: '#78C850' },
  electric: { color: 'yellow', hex: '#F8D030' },
  psychic: { color: 'pink', hex: '#F85888' },
  ice: { color: 'lightblue', hex: '#98D8D8' },
  dragon: { color: 'blue', hex: '#7038F8' },
  dark: { color: 'black', hex: '#705848' },
  fairy: { color: 'pink', hex: '#F0B6C1' },
  shadow: { color: 'black', hex: '#000000' },
} as const;

export interface PokemonTypeData {
  type: {
    name: PokemonType;
  };
}

export interface PokemonDescriptionData {
  language: {
    name: string;
  };
  flavor_text: string;
}

export interface AppMultiSelectDropDownProps {
  label: string;
  onChangeHandler: (value: string[], event: React.SyntheticEvent) => void;
  data: any[];
  placeholder?: string;
  isOpen?: boolean;
  onCloseHandler?: () => void;
  onCleanHandler?: (event: React.SyntheticEvent) => void;
  onOpenHandler?: () => void;
}

export interface SearchFilterProps {
  placeholder: string;
  inputClass: string;
  onChangeHandler: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  label: React.ReactNode;
}

export interface AppFilterProps {
  isFilterEnable: (isEnabled: boolean) => void;
}

export interface Ability {
  ability: {
    name: string;
    url: string;
  };
}

export interface Type {
  type: {
    name: string;
  };
}

export interface DamageRelations {
  double_damage_from: any;
  damage_relations: Array<{ name: string }>;
}

export interface SpeciesData {
  egg_groups: Array<{ name: string }>;
}

export interface Data {
  height: number;
  weight: number;
  abilities: Ability[];
  types: Type[];
}

export interface PropertyCardProps {
  speciesData: SpeciesData;
  data: Data;
  pokemonTypeData: {
    damage_relations: DamageRelations;
  };
}

export interface ApploaderProps {
  className?: string;
}

export interface Stat {
  stat: {
    name: string;
    url: string;
  };
  base_stat: number;
}

export interface StatCardProps {
  stats: Stat[];
}

export interface PokemonData {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: Ability[];
  types: Type[];
  stats?: Stat[];
}

export interface TypeData {
  // Define the structure of the type data based on your API response
  damage_relations: DamageRelations;
}

export interface DetailPageProps {
  isCardSelected: boolean;
  toggleModal: () => void;
  pokemonId: number;
  offset: number;
}

export interface PokemonCardProps {
  data: {
    id: number;
    name?: string;
    types?: PokemonTypeData[];
    sprites: {
      other?: {
        dream_world?: {
          front_default?: string | null;
        };
      };
      front_default: string | null;
    };
  };
  onClick?: () => void;
  className?: string;
}

export interface EvolutionChainCardProps {
  data: {
    id: number;
    // Add other properties of the data object as needed
  };
}

export interface DetailsHeaderProps {
  data: any;
  speciesData: any;
  backClick: () => void;
  closeClick: () => void;
  forwordClick: () => void;
}

export interface ColorfulTagProps {
  text: string;
  className: string;
  type: any;
}

export interface Pokemon {
  id: number;
  name: string;
  description: string;
  url: string;
  base_experience?: number;
  height: number;
  is_default?: boolean;
  order: number;
  weight?: number;
  abilities?: Ability[];
  moves?: Move[];
  stats?: Stat[];
  types?: Type[];
  species?: {
    name: string;
    url: string;
  };
}

export interface PokemonList {
  name: string;
  url: string;
}

export interface Ability {
  is_hidden: boolean;
  slot: number;
  ability: {
    name: string;
    url: string;
  };
}

export interface Move {
  move: {
    name: string;
    url: string;
  };
  version_group_details: any[];
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export type GenderValue = 'female' | 'male' | 'genderless';

export interface PokemonGender {
  name: GenderValue;
  url: string;
}

export interface PokemonState {
  pokemonsList: PokemonList[];
  allPokemonsList: Pokemon[];
  pokemonSelectedId: number | null;
  pokemonData: Pokemon | null;
  isLoading: boolean;
  isLoadMoreInprogress: boolean;
  pokemonsTypes: PokemonType[];
  pokemonGenderList: PokemonGender[];
}

export interface State {
  isLoading: boolean;
  pokemonList: PokemonList[];
  allPokemonList: Pokemon[];
  // Add other state properties as necessary
}

export interface Action {
  type: string;
  payload: any;
}