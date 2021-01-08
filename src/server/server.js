import express from 'express';
import dotenvt from 'dotenv';
import webpack from 'webpack';

const app = express();

dotenvt.config();

const PORT = process.env.PORT || 3000;
const ENV = process.env.ENV || 'development';

if (ENV == 'development') {
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  const compiler = webpack(webpackConfig);
  const { publicPath } = webpackConfig.output;
  const serverConfig = { serverSideRender: true, publicPath };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
}

app.get('*', (req, res) => {
  res.send({ hola: 'expres' });
});

app.listen(PORT, () => {
  console.log(`listen in ${PORT} port`);
});
