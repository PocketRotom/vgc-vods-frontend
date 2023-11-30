import api from '../utils/api';

export const getAllCountries = async () => {
	try {
		const res = await api.get('/getAllCountries');
		return res.data;
	} catch (error) {
		console.log(error);
	}
};