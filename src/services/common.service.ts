import { LIMIT, baseURL } from "../constants/apiUrls";

export const initialURL = `${baseURL}/pokemon?limit=${LIMIT}`;
export const allPokemonURL = `${baseURL}/pokemon?limit=1100`;

export const getPokemonData = async (): Promise<any> => {
  const response = await fetch(`${initialURL}`);
  return response.json();
};

export const getSpeciesDataById = async (id: number): Promise<any> => {
  const response = await fetch(`${baseURL}/pokemon-species/${id}/`);
  return response.json();
};

export const getPokemonTypesById = async (id: number): Promise<any> => {
  const response = await fetch(`${baseURL}/type/${id}/`);
  return response.json();
};

export const getPokemonTypes = async (): Promise<any> => {
  const response = await fetch(`${baseURL}/type`);
  return response.json();
};

export const getPokemonGenders = async (): Promise<any> => {
  const response = await fetch(`${baseURL}/gender`);
  return response.json();
};

export const getPokemonDataById = async (id: number): Promise<any> => {
  const response = await fetch(`${baseURL}/pokemon/${id}/`);
  return response.json();
};

export const getPokemonDataByURL = async (URL: string): Promise<any> => {
  const response = await fetch(URL);
  return response.json();
}

export const numberFormation = (number: number): string => {
  if (Number(number) < 10) return `00${number}`;
  if (Number(number) > 10 && Number(number) < 100) return `0${number}`;
  return number.toString();
}

export const getAllParallelCall = async (ApiUrls: string[]): Promise<any[]> => {
  return await Promise.all(
    ApiUrls.map(async url => {
      const res = await fetch(url);
      return res.json();
    }));
}

export const removeDuplicateBy = <T>(arr: T[], prop: keyof T): T[] => {
  return [...new Map(arr.map((m) => [m[prop], m])).values()];
}