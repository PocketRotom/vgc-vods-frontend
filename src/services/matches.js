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
		console.log(res.data);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export const addNewMatch = async (match) => {
	try {
		const res = await api.post('/addMatch', null, {
			params: match
		});
		return res.data;
	} catch (error) {
		console.log(error);
	}
};