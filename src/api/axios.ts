import axios from "axios";

const BASE_URL = "https://api.build-mate.in/api";

export const BaseAxiosInstance = axios.create({
	baseURL: BASE_URL,
});

export const CredentialAxiosInstance = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
});

CredentialAxiosInstance.interceptors.request.use(
	(config) => {
		// Get the token from cookies or localStorage
		// Add the token to the headers
		config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
		return config;
	},
	(error) => {
		console.log(error);
		return Promise.reject(error);
	}
);
