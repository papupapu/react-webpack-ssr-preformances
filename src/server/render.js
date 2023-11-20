import React from 'react';
import { renderToString } from 'react-dom/server';
import { matchRoutes, renderMatches } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import getHtml from './html';
import path from 'path';
import store from '../common/store';
import routes from '../common/routes';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';

const render = (req, res, next) => {
  const loadableJson = path.resolve(__dirname, './loadable-stats.json');

  const matches = matchRoutes(routes, req.url);

  const extractor = new ChunkExtractor({
    statsFile: loadableJson,
    entrypoints: ['client'],
  });

  const content = renderToString(
    <ChunkExtractorManager extractor={extractor}>
      <Provider store={store}>
        <StaticRouter
          location={req.url}
          context={{}}
        >
          {renderMatches(matches)}
        </StaticRouter>
      </Provider>
    </ChunkExtractorManager>
  );

  const htmlData = {
    children: content,
    extractor,
  };

  const html = getHtml(htmlData);

  return res.status(200).send(html);
};

export default render;
