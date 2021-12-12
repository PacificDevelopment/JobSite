const employers = require('./controllers/employersController');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('dist'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Job Seekers!');
})

app.get('/data/employers', employers.retrieveEmployerData);

app.listen(port, () => {
  console.log(`Jobsite app listening at http://localhost:${port}`);
})