import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';

import store from '../common/store';

import App from './App';

import reportWebVitals from '../reportWebVitals';

import './style.scss';

const renderApp = () => {
  const rootContainer = document.getElementById('root');
  const rootComponent = (    
    <Provider store={store}>
      <BrowserRouter>
        <App />        
      </BrowserRouter>
    </Provider>
  );
  if (module.hot) {
    const root = createRoot(rootContainer);
    root.render(rootComponent);
  } else {
    hydrateRoot(rootContainer, rootComponent);
  }
};

loadableReady(() => renderApp());

if (module.hot) {
  module.hot.accept();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
