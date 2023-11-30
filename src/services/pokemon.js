import api from '../utils/api';

export const getAllPokemon = async () => {
	try {
		const res = await api.get('/getAllPokemon');
		return res.data;
	} catch (error) {
		console.log(error);
	}
};