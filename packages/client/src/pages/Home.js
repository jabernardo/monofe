import React from 'react';
import Helmet from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Hello World!</title>
      </Helmet>
      <div>Home Page</div>
      <button onClick={() => console.log('Boo!')}>Click!</button>
    </>
  );
};

export default Home;
