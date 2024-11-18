import { AxiosResponse } from 'axios';
import api from '../utils/api';
import Cookies from 'js-cookie';

export const login = async (username: string, password: string): Promise<boolean> => {
  try {
    //console.log('Username: ' + username + ' Password: ' + password);
    const res: AxiosResponse = await api.post('/login', { username, password });
    if (res.data.success && res.data.data) {
      Cookies.set('token', res.data.data);
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const signup = async (username: string, password: string): Promise<boolean | undefined> => {
  try {
    const res: AxiosResponse = await api.post('/signup', { username, password });
    return res.data.success;
  } catch (error) {
    console.log(error);
  }
};

export const verifyToken = async (): Promise<any> => {
  try {
    const token = Cookies.get('token');
    const res: AxiosResponse = await api.post('/verifyToken', { token });
    return res.data.success;
  } catch (error) {
    console.log(error);
    return false;
  }
};
