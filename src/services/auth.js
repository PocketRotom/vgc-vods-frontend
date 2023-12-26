import api from '../utils/api';
import Cookies from 'js-cookie';

export const login = async (username, password) => {
	try {
		console.log('Username: ' + username + ' Password: ' + password);
		const res = await api.post('/login', {username, password});
		console.log(res.data);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export const signup = async (username, password) => {
	try {
		const res = await api.post('/signup', {username, password});
		return res.data.success;
	} catch (error) {
		console.log(error);
	}
};

export const verifyToken = async () => {
	try {
		const token = Cookies.get('token');
		const res = await api.post('/verifyToken', {token});
		return res.data;
	} catch (error) {
		console.log(error);
		return false;
	}
};