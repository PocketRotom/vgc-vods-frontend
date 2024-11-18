import { LoginResponse, SignupResponse, VerifyTokenResponse } from '../models/auth';
import api from '../utils/api';
import Cookies from 'js-cookie';

export const login = async (username: string, password: string): Promise<any> => {
  try {
    console.log('Username: ' + username + ' Password: ' + password);
    const res: LoginResponse = await api.post('/login', { username, password });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const signup = async (username: string, password: string): Promise<boolean | undefined> => {
  try {
    const res: SignupResponse = await api.post('/signup', { username, password });
    return res.data.success;
  } catch (error) {
    console.log(error);
  }
};

export const verifyToken = async (): Promise<any> => {
  try {
    const token = Cookies.get('token');
    const res: VerifyTokenResponse = await api.post('/verifyToken', { token });
    return res.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
