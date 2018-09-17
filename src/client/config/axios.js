import axios from 'axios';
console.log("--- 1", process.env.BASE_URL);
const axiosInstance = axios.create({
	baseURL: process.env.BASE_URL
});

axiosInstance.interceptors.response.use(res => {
	return res;
}, err => {
	return Promise.reject(err);
});

export default axiosInstance;
