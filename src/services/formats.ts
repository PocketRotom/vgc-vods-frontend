import api from '../utils/api';
import { AxiosResponse } from 'axios';
import { Formats, FormatsResponse } from '../models/formats';

export const getAllFormats = async (): Promise<Formats[]> => {
  try {
    const res: AxiosResponse<FormatsResponse> = await api.get('/getAllFormats');
    return res.data.data;
  } catch (error) {
    console.log(error);
    throw error; // Re-throw the error after logging it
  }
};
