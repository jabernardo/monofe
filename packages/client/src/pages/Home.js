import React from 'react';
import Helmet from 'react-helmet';
import loadable from '@loadable/component';

const Button = loadable(() => import(/* webpackChunkName: "home-components" */'../components/button'), { ssr: false });

import './Home.style.css';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Hello World!!!</title>
      </Helmet>
      <div>Home Page</div>
      <Button />
    </>
  );
};

export default Home;
