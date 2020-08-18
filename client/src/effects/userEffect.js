import axios from 'axios';

import config from '../env.json';

// Destructure variables from the env.json file
const { apiUserRoute, backendUrl } = config;

// The full base user route for apiValidation calls
const fullApiUserRoute = backendUrl + apiUserRoute;

export const verifyTokenRequest = async () => {
	try {
		return await axios.get(`${fullApiUserRoute}/`);
	} catch (err) {
		throw new Error(`Something went wrong... ${err.message}`);
	}
};