import express from 'express';
import morgan from 'morgan';

import renderer from './helpers/renderer';

const app = express();
const port = 3000;

app.use(morgan('combined'));
app.use(express.static('public'));

app.get('*', (req, res) => {
  res.end(renderer(req));
});

app.listen(port, () => {
  console.log('App is running...');
});
