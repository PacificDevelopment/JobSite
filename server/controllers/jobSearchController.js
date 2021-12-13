var careerjet = require('../careerJet.js');

let axios = require('axios');
const cheerio = require('cheerio');

require('dotenv').config();

exports.jobSearch = (req, res) => {
  console.log('querying jobs!');
  let { location, keywords, sortBy, pagesize, radius, page } = req.query;

  //careerjet api does not support "remote" location, add remote to search
  if (location.match(/remote/i) || location.match(/anywhere/i)) {
    keywords = location + ' ' + keywords;
    location = '';
  }

  pagesize = parseInt(pagesize);
  radius = parseInt(radius);
  page = parseInt(page);

  const careerjetAPI = new careerjet({locale: 'en_US', affid: process.env.AFFID, user_ip: '192.0.0.1', user_agent: 'JobSite'});

  /*
  contracttype: Selected contract type.p — permanent job, c — contract, t — temporary, i — training, v — voluntary, none — all contract types.

  contractperiod = contractperiod || ''
  Selected contract period. f — full time, p — part time, none — all contract periods.
  */

  careerjetAPI
    .location(location)
    .keywords(keywords)
    //date, relevance, salary
    .sortBy(sortBy)
    .pagesize(pagesize)
    .radius(radius)
    .page(page)
    .query()
      .then((response) => {
        const results = response.data;
        //web scrape each returned url to get full description and external application url
        Promise.all(results.jobs.map(async (job, index) => {
          await axios.get(job.url)
            .then((response) => {
              const html = response.data;
              const $ = cheerio.load(html);
              const description = $('.content');
              const companyURL = $('.source').children('a').attr('href');
              results.jobs[index].description = description.html();
              //possible use regex to change /n in description to <br/>
              results.jobs[index].applyExternal = 'careerjet.com' + companyURL;
            });
        }))
        .then(() => res.send(results));
      })
      .catch((err) => console.log(err));
}

exports.googleJobsSearch = (req, res) => {
  const SerpApi = require('google-search-results-nodejs');
  const search = new SerpApi.GoogleSearch(process.env.serpAPI);

  const params = {
    engine: "google_jobs",
    google_domain: "google.com",
    q: "Software Developer",
    hl: "en",
    gl: "us",
    location: "89436, Nevada, United States"
  };

  const callback = function(data) {
    console.log(data);
    res.send(data);
  };

  // Show result as JSON
  search.json(params, callback);
  };