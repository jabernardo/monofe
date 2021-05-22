import loadable from '@loadable/component';

const Components = {
  Button: loadable(() => import('./components/button'), { ssr: false }),
  Test: loadable(() => import('./components/button'), { ssr: false }),
  sssss: loadable(() => import('./components/button'), { ssr: false }),
};

export default (component) => Components[component] || (<label>NOt found</label>);
