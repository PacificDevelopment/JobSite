const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('dist'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Job Seekers!');
});

app.listen(port, () => {
  console.log(`Jobsite app listening at http://localhost:${port}`);
});
