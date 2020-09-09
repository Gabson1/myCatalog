import React from 'react';
import { Container, Image } from 'semantic-ui-react';

import notFound from '../../assets/svg/404.svg';

import './notFound.css';

const NotFound = () => (
  <Container className="notFoundWrapper">
    <Image size="medium" src={notFound} alt="Page Not Found" />
  </Container>
);

export default NotFound;
