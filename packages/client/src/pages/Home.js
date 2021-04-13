import React from 'react';
import Helment from 'react-helmet';

import './Home.style.css';

const Home = () => {
  return (
    <>
      <Helment>
        <title>Hello World!</title>
      </Helment>
      <div>Home Page</div>
      <button onClick={() => console.log('Bosso!')}>Click!</button>
    </>
  );
};

export default Home;
