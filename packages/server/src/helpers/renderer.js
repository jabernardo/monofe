import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ChunkExtractor } from '@loadable/server';

import { Routes } from '@monofe/client';

import path from 'path';

export default (req) => {
  const statsFileClient = path.resolve(__dirname, '../dist/loadable-stats.json');
  const statsFileServer = path.resolve(__dirname, '../build/loadable-stats.json');
  console.log('DEBUG-- 🚀 ~ file: renderer.js ~ line 13 ~ statsFileServer', statsFileServer)

  const extractorClient = new ChunkExtractor({ statsFile: statsFileClient, publicPath: '/' });
  const extractorServer = new ChunkExtractor({ statsFile: statsFileServer, publicPath: '/' });

  const App = () => {
    return (
      <StaticRouter location={req.path}>
        <Routes />
      </StaticRouter>
    );
  };

  const jsx = extractorServer.collectChunks(<App />);
  const content = renderToString(jsx);

  return (`
  <html>
    <head>
      ${extractorClient.getLinkTags()}
      ${extractorClient.getStyleTags()}
    </head>
    <body>
      <div id="root">${content}</div>
      ${extractorClient.getScriptTags()}
    </body>
  </html>
  `);
};
