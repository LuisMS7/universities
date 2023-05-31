import axios from 'axios';

const baseURL = 'http://universities.hipolabs.com/';

const client = axios.create({
	baseURL: baseURL,
	timeout: 5000,
});

export default client;
