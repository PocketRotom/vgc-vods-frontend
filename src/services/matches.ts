import { AddMatchResponse, GetAllMatchesResponse, Match } from '../models/match';
import api from '../utils/api';
import { AxiosResponse } from 'axios';

export const getAllMatches = async (): Promise<Match[]> => {
  try {
    const res: AxiosResponse<GetAllMatchesResponse> = await api.get('/getAllMatches');
    return res.data.data;
  } catch (error) {
    console.log(error);
    throw error; // Re-throw the error after logging it
  }
};

export const getMatchByID = async (id: number): Promise<Match> => {
  try {
    const res: AxiosResponse<GetAllMatchesResponse> = await api.get('/getMatch/', {
      params: { id }
    });
    console.log(res.data);
    return res.data.data[0];
  } catch (error) {
    console.log(error);
    throw error; // Re-throw the error after logging it
  }
};

export const addNewMatch = async (match: Match): Promise<boolean> => {
  try {
    const res: AxiosResponse<AddMatchResponse> = await api.post('/addMatch', null, {
      params: match
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
