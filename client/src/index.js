import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './router/App';
import AppRouter from './router/appRouter';
import { store } from './store/store';


import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);


// Todo: Once authentication is fixed and App component as well, replace <AppRouter /> with <App />