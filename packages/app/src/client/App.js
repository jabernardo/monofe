import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import Routes from './Routes';

const App = () => {
  return hot(
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
