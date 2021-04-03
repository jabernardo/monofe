import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import { Routes } from '@monofe/client';

export default (req) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <Routes />
    </StaticRouter>
  );

  return `<!doctype html>
<html>
  <body>
    <div id="root">${content}</div>
  </body>
  <script src="bundle.js"></script>
</html>
  `;
};
