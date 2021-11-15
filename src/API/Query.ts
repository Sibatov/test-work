import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const getPackageList = async (text: string, size: number, from: number) => {
	try {
		return await axios.get(`${apiUrl}`, {
			params: {
				text,
				size,
				from
			}
		});
	} catch (error) {
		console.error(error);
	}
}
