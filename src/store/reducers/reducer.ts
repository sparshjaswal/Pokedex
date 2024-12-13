// import * as ACTIONS from "../../store/actions/pokemonAction";
import { Pokemon, PokemonState, PokemonGender, PokemonType } from "../../constants/pokemon.types";

export type ActionType =
    | { type: "ACTIONS.SET_POKEMON_LIST"; payload: Pokemon[] }
    | { type: "ACTIONS.SET_ALL_POKEMON_LIST"; payload: Pokemon[] }
    | { type: "ACTIONS.SET_FILTERED_POKEMON_LIST"; payload: Pokemon[] }
    | { type: "ACTIONS.SET_POKEMON_TYPE"; payload: PokemonType[] }
    | { type: "ACTIONS.SET_POKEMON_GENDER_LIST"; payload: PokemonGender[] }
    | { type: "ACTIONS.SET_API_CALL_INPROGRESS"; payload: boolean }
    | { type: "ACTIONS.SET_LOAD_MORE_API_CALL_INPROGRESS"; payload: boolean }
    | { type: "ACTIONS.SET_POKEMON_BY_ID"; payload: Pokemon | null }
    | { type: "ACTIONS.RESET_POKEMON_DATA" }
    | { type: "ACTIONS.SET_POKEMON_ID"; payload: number | null };

export const initialState: PokemonState = {
    pokemonsList: [],
    allPokemonsList: [],
    pokemonSelectedId: null,
    pokemonData: null,
    isLoading: true,
    isLoadMoreInprogress: false,
    pokemonsTypes: [],
    pokemonGenderList: [],
};

export const reducer = (state: PokemonState, action: ActionType): PokemonState => {
    switch (action.type) {
        case "ACTIONS.SET_POKEMON_LIST":
            return {
                ...state,
                pokemonsList: [...state.pokemonsList, ...action.payload],
            };
        case "ACTIONS.SET_ALL_POKEMON_LIST":
            return {
                ...state,
                allPokemonsList: action.payload,
            };
        case "ACTIONS.SET_FILTERED_POKEMON_LIST":
            return {
                ...state,
                pokemonsList: action.payload,
            };
        case "ACTIONS.SET_POKEMON_TYPE":
            return {
                ...state,
                pokemonsTypes: action.payload,
            };
        case "ACTIONS.SET_POKEMON_GENDER_LIST":
            return {
                ...state,
                pokemonGenderList: action.payload,
            };
        case "ACTIONS.SET_API_CALL_INPROGRESS":
            return {
                ...state,
                isLoading: action.payload,
            };
        case "ACTIONS.SET_LOAD_MORE_API_CALL_INPROGRESS":
            return {
                ...state,
                isLoadMoreInprogress: action.payload,
            };
        case "ACTIONS.SET_POKEMON_BY_ID":
            return {
                ...state,
                pokemonData: action.payload,
            };
        case "ACTIONS.RESET_POKEMON_DATA":
            return {
                ...state,
                pokemonData: null,
            };
        case "ACTIONS.SET_POKEMON_ID":
            return {
                ...state,
                pokemonSelectedId: action.payload,
            };
        default:
            return state;
    }
};