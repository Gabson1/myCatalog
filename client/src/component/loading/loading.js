import React from 'react';
import { Container, Image } from 'semantic-ui-react'

import loading from '../../assets/spinner.gif';

import './loading.css';

const Loading = () => (
  <Container className="loadingWrapper">
    <Image size="medium" src={loading} alt="loading..."/>
  </Container>
);

export default Loading;