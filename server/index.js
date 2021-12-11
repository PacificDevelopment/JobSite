const express = require('express')
const app = express()
const port = 3000

var careerjet = require('careerjet');
require('dotenv').config();

app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('Hello Job Seekers!')
});

app.get('/jobsearch', (req, res) => {
  console.log('querying jobs!');
  let { location, keywords, sortBy, pagesize, radius, start, page } = req.query;
  pagesize = parseInt(pagesize);
  radius = parseInt(radius);
  start = parseInt(start);
  page = parseInt(page);
  const careerjetAPI = new careerjet({locale: 'en_US', affid: process.env.AFFID, user_ip: '192.0.0.1', user_agent: 'x'});

  careerjetAPI
    .location(location)
    .keywords(keywords)
    //date, relevance, salary
    .sortBy(sortBy)
    .pagesize(pagesize)
    .radius(radius)
    .start(start)
    .page(page)
    .query(
        function (results) {
            console.log(results.jobs.length);
            res.send(results);
        },
        function (error) {
            console.error('ERROR', error);
            res.send(error);
  });
});

app.listen(port, () => {
  console.log(`Jobsite app listening at http://localhost:${port}`)
});


/*

result_json = cj.search({
                        'location'    : 'london',
                        'keywords'    : 'python',
                        'affid'       : '213e213hd12344552',
                        'user_ip'     : '11.22.33.44',
                        'url'         : 'http://www.example.com/jobsearch?q=python&l=london',
                        'user_agent'  : 'Mozilla/5.0 (X11; Linux x86_64; rv:31.0) Gecko/20100101 Firefox/31.0'
                      });
Mandatory Search Params

contracttype: Selected contract type.p — permanent job, c — contract, t — temporary, i — training, v — voluntary, none — all contract types.

contractperiod
 Selected contract period. f — full time, p — part time, none — all contract periods.



*/