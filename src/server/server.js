import express from 'express';

const app = express();

app.get('*', (req, res) => {
  res.send({ hola: 'expres' });
});

app.listen(3000, () => {
  console.log('listen in 3000 port');
});
