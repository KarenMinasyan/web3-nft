import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	headers: {},
	params: {},
});
instance.interceptors.request.use(
	async (config) => {
		let token = await localStorage.getItem('token');
		if (token) {
			// @ts-ignore
			config.headers['Authorization'] = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);
instance.interceptors.response.use(
	(res) => {
		return res;
	},
	async (err) => {
		return Promise.reject(err);
	}
);
export default instance;
