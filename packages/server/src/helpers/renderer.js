import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import { Routes } from '@monofe/client';

import fs from 'fs';
import path from 'path';

export default (req) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <Routes />
    </StaticRouter>
  );

  const fileTemplate = fs.readFileSync(path.resolve(__dirname, '../public/index.html'), 'utf8');

  return fileTemplate.replace(
    '<div id="root"></div>',
    `<div id="root">${content}</div>`
  );
};
