import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_API_URL;
let $api = axios.create({baseURL:baseUrl, headers: {
    'Content-Type': 'application/json',
},
})
$api.defaults.baseURL = baseUrl;
console.log(process.env.REACT_APP_BASE_API_URL);

$api.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
	return config;
});
export default $api;