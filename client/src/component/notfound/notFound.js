import React, { Fragment } from 'react';

import notFound from '../../assets/404.svg';

const NotFound = () => {
	return (
		<Fragment>
			<p>
				<img src={notFound} alt="Not found" /> Page Not Found
			</p>
		</Fragment>
	);
};

export default NotFound;