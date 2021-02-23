import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ msg: 'Hello word' });
});

app.listen(3333);
