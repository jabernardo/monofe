import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';

import { Routes } from '@monofe/client';

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

loadableReady(() => {
  ReactDOM.hydrate(<App />, document.getElementById('root'));
});
