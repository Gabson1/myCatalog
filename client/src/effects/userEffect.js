import axios from 'axios';

import config from '../env.json';

// Destructure variables from the env.json file
const { apiUserRoute, backendUrl } = config;

// The full base user route for token validation calls
const fullApiUserRoute = backendUrl + apiUserRoute;

export const verifyTokenRequest = (token) => {
	console.log('verifyTokenRequest:', token);
	try {
		return axios.get(`${fullApiUserRoute}/`, token);
	} catch (err) {
		throw new Error(`Something went wrong... ${err.message}`);
	}
};
