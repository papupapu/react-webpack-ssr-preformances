import React from 'react';
import loadable from "@loadable/component";

const LoadablePage = loadable((props) => import(`../client/${props.page}`), {
  fallback: <div>Page is Loading...</div>,
  cacheKey: (props) => props.page
});

const routes = [
  {
    path: '/',
    element: <LoadablePage page='Page1' />,
  },
  {
    path: '/giorno',
    element: <LoadablePage page='Page2' />,
  },
];

export default routes;
