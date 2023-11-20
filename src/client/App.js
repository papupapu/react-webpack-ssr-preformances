import { memo } from 'react';
import { useRoutes } from 'react-router-dom';

import routes from '../common/routes';
const App = () => useRoutes(routes);

export default memo(App);
