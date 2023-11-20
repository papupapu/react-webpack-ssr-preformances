import React, { memo } from 'react';
import { useRoutes } from 'react-router-dom';

import routes from '../common/routes';

import Container from './UI';

const App = () => (
  <Container>
    {useRoutes(routes)}
  </Container>
);

export default memo(App);
