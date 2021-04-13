import express from 'express';
import morgan from 'morgan';

import renderer from './helpers/renderer';

const app = express();
const port = 80;

app.use(morgan('combined'));
app.use(express.static('public', { index: false }));

app.get('*', (req, res) => {
  res.end(renderer(req));
});

app.listen(port, () => {
  console.log('App is running...');
});
