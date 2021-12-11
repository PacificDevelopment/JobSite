const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('dist'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Job Seekers!');
});

// app.get('/job_listings', (req, res) => {
//   console.log('express get request');
//   db.getJobListingss(req.query.product_id)
//     .then((data) => {
//       res.status(200).send(data.data);
//     })
//     .catch((err) => {
//       res.status(404).send(err);
//     });
// });

app.listen(port, () => {
  console.log(`Jobsite app listening at http://localhost:${port}`);
});
