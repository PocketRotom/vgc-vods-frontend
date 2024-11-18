import { Pokemon, PokemonResponse } from '../models/pokemon';
import api from '../utils/api';
import { AxiosResponse } from 'axios';

export const getAllPokemon = async (): Promise<Pokemon[]> => {
  try {
    const res: AxiosResponse<PokemonResponse> = await api.get('/getAllPokemon');
    return res.data.data;
  } catch (error) {
    console.log(error);
    throw error; // Re-throw the error after logging it
  }
};
