import { AxiosResponse } from 'axios';
import { CountriesResponse, Country } from '../models/countries';
import api from '../utils/api';

export const getAllCountries = async (): Promise<Country[]> => {
  try {
    const res: AxiosResponse<CountriesResponse> = await api.get('/getAllCountries');
	console.log(res);
    return res.data.data;
  } catch (error) {
    console.log(error);
	return [];
  }
};
