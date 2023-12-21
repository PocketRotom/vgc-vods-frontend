import api from '../utils/api';

export const getAllPlayers = async () => {
	try {
		const res = await api.get('/getAllPlayers');
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

export const addPlayer = async (player) => {
	try {
		const res = await api.post('/addNewPlayer', null, {
			params: player
		});
		return res.data;
	} catch (error) {
		console.log(error);
	}
};