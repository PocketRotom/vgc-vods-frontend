import api from '../utils/api';

export const getAllFormats = async () => {
	try {
		const res = await api.get('/getAllFormats');
		return res.data;
	} catch (error) {
		console.log(error);
	}
};