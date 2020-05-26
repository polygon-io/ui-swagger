import axios from 'axios';

export const AxiosV1 = axios.create({
	baseURL: `${window.API_BASE}v1/`,
	timeout: 20000,
	withCredentials: true
});

export const AxiosV2 = axios.create({
	baseURL: `${window.API_BASE}v2/`,
	timeout: 20000,
	withCredentials: true
});

export const PublicAPI = axios.create({
	baseURL: `${window.window.PUB_API_BASE}`,
	timeout: 20000
});

export default AxiosV1;
