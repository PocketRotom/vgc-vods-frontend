import { AddPlayerResponse, Player, PlayerResponse } from '../models/player';
import api from '../utils/api';
import { AxiosResponse } from 'axios';

export const getAllPlayers = async (): Promise<Player[]> => {
  try {
    const res: AxiosResponse<PlayerResponse> = await api.get('/getAllPlayers');
    return res.data.data;
  } catch (error) {
    console.log(error);
    throw error; // Re-throw the error after logging it
  }
};

export const addPlayer = async (player: Player): Promise<boolean> => {
  try {
    const res: AxiosResponse<AddPlayerResponse> = await api.post('/addNewPlayer', null, {
      params: player
    });
	if (res.data.success) {
	  return true;
	}
    return false;
  } catch (error) {
    console.log(error);
	return false;
  }
};
