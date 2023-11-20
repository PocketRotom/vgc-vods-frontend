import api from '../utils/api';

export const getAllMatches = async () => {
	try {
		const res = await api.get('/getAllMatches');
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export const getMatchByID = async (id) => {
	try {
		const res = await api.get('/getMatch/', {
			params: {id}
		});
		return res.data;
	} catch (error) {
		console.log(error);
	}
};