import axios from 'axios';
import {showPreloader, showError} from '../actions';

const axiosInstance = axios.create({
	baseURL: process.env.BASE_URL || "/api"
});

axiosInstance.interceptors.request.use(function (config) {
	axiosInstance.store.dispatch(showPreloader(true));
	return config;
}, function (error) {
	axiosInstance.store.dispatch(showPreloader(false));
	return Promise.reject(error);
});

axiosInstance.interceptors.response.use(res => {
	axiosInstance.store.dispatch(showPreloader(false));
	return res;
}, err => {
	const {response} = err;
	axiosInstance.store.dispatch(showPreloader(false));
	axiosInstance.store.dispatch(showError({
		message: "Oops, something went wrong. Please, reload the page and try again"
	}));
	return Promise.reject(err);
});

export default axiosInstance;
