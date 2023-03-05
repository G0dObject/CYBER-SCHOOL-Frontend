import axios from "axios";
import { store } from "..";

const baseUrl = process.env.REACT_APP_BASE_API_URL;
let $api = axios.create({
	baseURL: baseUrl, headers: {
		'Content-Type': 'application/json',
		"Access-Control-Allow-Origin": '*'
	},
})


$api.defaults.baseURL = baseUrl;
console.log(process.env.REACT_APP_BASE_API_URL);

$api.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${store.user.Token}`;
	
	
	
	return config;
});

export default $api;
