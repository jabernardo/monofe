import React from 'react';
import Helmet from 'react-helmet';
import loadable from '@loadable/component';

const Button = loadable(
  () => import(/* webpackChunkName: "home-components" */'@monofe/components'),
  {
    resolveComponent: (components) => components.Button,
    ssr: false
  }
);


const A = loadable(() => import('./letters/A'));
const B = loadable(() => import('./letters/B'));
const C = loadable(() => import(/* webpackPreload: true */ './letters/C'));
const D = loadable(() => import(/* webpackPrefetch: true */ './letters/D'));

import './Home.style.css';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Hello World!!!</title>
      </Helmet>
      <div>Home Page!</div>
      <Button />
    </>
  );
};

export default Home;
