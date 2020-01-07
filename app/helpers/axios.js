
import axios from 'axios'


export const AxiosV1 = axios.create({
	baseURL: `${window.API_BASE}v1/`,
	timeout: 20000,
	withCredentials: true
})


export const AxiosV2 = axios.create({
	baseURL: `${window.API_BASE}v2/`,
	timeout: 20000,
	withCredentials: true
})



export default AxiosV1