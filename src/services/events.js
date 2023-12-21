import api from '../utils/api';

export const getAllEvents = async () => {
	try {
		const res = await api.get('/getAllEvents');
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export const addEvent = async (event) => {
	try {
		const res = await api.post('/createNewEvent', event);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};