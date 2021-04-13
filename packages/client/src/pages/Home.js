import React from 'react';
import Helmet from 'react-helmet';

import './Home.style.css';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Hello World!</title>
      </Helmet>
      <div>Home Page</div>
      <button onClick={() => console.log('Bosso!')}>Click!</button>
    </>
  );
};

export default Home;
