import api from '../utils/api';
import { AxiosResponse } from 'axios';
import { AddEventResponse, Event, EventsResponse } from '../models/events';

export const getAllEvents = async (): Promise<Event[]> => {
  try {
    const res: AxiosResponse<EventsResponse> = await api.get('/getAllEvents');
    return res.data.data;
  } catch (error) {
    console.log(error);
    throw error; // Re-throw the error after logging it
  }
};

export const addEvent = async (event: Event): Promise<boolean> => {
  try {
    const res: AxiosResponse<AddEventResponse> = await api.post('/createNewEvent', event);
    if (res.data.success) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};
