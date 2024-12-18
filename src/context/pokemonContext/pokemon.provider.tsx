import React, { useReducer, useEffect, useRef, ReactNode } from "react";
import { initialState, reducer } from "../../store/reducers/reducer";
import PokemonContext from "./pokemon.context";
import {
    allPokemonURL,
    initialURL
} from "../../services/common.service";
import { Pokemon } from "../../constants/pokemon.types";
import { JSX } from "react/jsx-runtime";

export const PokemonProvider: React.FC<{
    children: ReactNode;
}> = ({ children }): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const batchURL = useRef<string>(initialURL);

    const setAppLoading = (loading: boolean) => {
        dispatch({
            type: "ACTIONS.SET_API_CALL_INPROGRESS",
            payload: loading,
        });
    };

    const setLoadMoreDataInprogress = (loading: boolean) => {
        dispatch({
            type: "ACTIONS.SET_LOAD_MORE_API_CALL_INPROGRESS",
            payload: loading,
        });
    };

    const getPokemonData = async (isReset: boolean = false) => {
        if (isReset) {
            batchURL.current = initialURL;
        }
        if (!batchURL.current) return;
        setLoadMoreDataInprogress(true);
        const resp = await fetch(batchURL.current);
        const { next, results }: { next: string; results: Pokemon[] } = await resp.json();

        batchURL.current = next;
        const pokemonList = await getPokemonDetailsListByUrl(results);
        setPokemonList(pokemonList);
        setLoadMoreDataInprogress(false);
    };

    const getPokemonDetailsListByUrl = async (results: Pokemon[]): Promise<Pokemon[]> => {
        const pokemonDetailsList = await Promise.all(
            results.map(async (pokemon) => {
                const response = await fetch(pokemon.url);
                const res: Pokemon = await response.json();
                return res;
            })
        );
        return pokemonDetailsList;
    };

    const getAllPokemonDataList = async () => {
        const resp = await fetch(allPokemonURL);
        const { results }: { results: Pokemon[] } = await resp.json();
        dispatch({
            type: "ACTIONS.SET_ALL_POKEMON_LIST",
            payload: results,
        });
    };

    const setPokemonList = (pokemonList: Pokemon[]) => {
        dispatch({
            type: "ACTIONS.SET_POKEMON_LIST",
            payload: pokemonList
        });
    };

    useEffect(() => {
        getPokemonData().then(() => state.isLoading && setAppLoading(false));
        getAllPokemonDataList();
    }, []);

    return (
        <PokemonContext.Provider
            value= {{
                state,
                dispatch,
                getPokemonData,
                getPokemonDetailsListByUrl,
                setAppLoading
            }}
        >{ children }</PokemonContext.Provider>
    );
};