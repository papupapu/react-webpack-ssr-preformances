import express from 'express';
import webpack from 'webpack';
import dotenv from 'dotenv';
import compression from 'compression';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';

import render from './render';

dotenv.config();

const app = express();

if (process.env.NODE_ENV === 'development') {
  const webpackConfig = require('../../webpack/dev/webpack.dev.client.js');
  const compiler = webpack(webpackConfig);

  app.use(WebpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    serverSideRender: true,
  }));

  app.use(WebpackHotMiddleware(compiler));
}

app.use(compression());
app.use(express.static('dist'));

app.get('/favicon.ico', (req, res) => res.status(204));

app.get('*', render);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
