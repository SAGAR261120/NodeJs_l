import express  from 'express';

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/home', (req, res) => {
  res.send('home Page');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
