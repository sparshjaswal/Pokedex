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
  normal: {
    color: "#DDCBD0",
    hex: ""
  },
  fighting: {
    color: "#FCC1B0",
    hex: ""
  },
  flying: {
    color: "#B2D2E8",
    hex: ""
  },
  poison: {
    color: "#CFB7ED",
    hex: ""
  },
  ground: {
    color: "#F4D1A6",
    hex: ""
  },
  rock: {
    color: "#C5AEA8",
    hex: ""
  },
  bug: {
    color: "#C1E0C8",
    hex: ""
  },
  ghost: {
    color: "#D7C2D7",
    hex: ""
  },
  steel: {
    color: "#C2D4CE",
    hex: ""
  },
  fire: {
    color: "#EDC2C4",
    hex: ""
  },
  water: {
    color: "#CBD5ED",
    hex: ""
  },
  grass: {
    color: "#C0D4C8",
    hex: ""
  },
  electric: {
    color: "#E2E2A0",
    hex: ""
  },
  psychic: {
    color: "#DDC0CF",
    hex: ""
  },
  ice: {
    color: "#C7D7DF",
    hex: ""
  },
  dragon: {
    color: "#CADCDF",
    hex: ""
  },
  dark: {
    color: "#C6C5E3",
    hex: ""
  },
  fairy: {
    color: "#E4C0CF",
    hex: ""
  },
  shadow: {
    color: "#CACACA",
    hex: ""
  }
} as const;

export interface PokemonTypesData {
  type: {
    name: PokemonType;
    url: string;
  },
  slot: string;
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
  types: PokemonTypesData[];
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
  types: PokemonTypesData[];
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
    types?: PokemonTypesData[];
    sprites?: {
      other?: {
        dream_world?: {
          front_default?: string | null;
        };
      };
      front_default?: string | null;
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
  forwardClick: () => void;
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
  types?: PokemonTypesData[];
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