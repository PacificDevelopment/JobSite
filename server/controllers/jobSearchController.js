const axios = require('axios');
const cheerio = require('cheerio');

require('dotenv').config();

const CareerJet = require('../careerJet');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomExperienceLevel = () => {
  const experienceLevels = {
    0: 'Entry',
    1: 'Mid',
    2: 'Senior',
    3: 'Executive',
  };

  const randomExperience = getRandomIntInclusive(0, 4);
  return experienceLevels[randomExperience];
};

const randomWorksite = () => {
  const random = getRandomIntInclusive(0, 1);
  return random ? 'On-Site' : 'Mixed';
};

exports.jobSearch = (req, res) => {
  let {
    location,
    keywords,
    // eslint-disable-next-line prefer-const
    sortBy,
    pagesize,
    radius,
    page,
    // eslint-disable-next-line prefer-const
    employmentType,
  } = req.query;

  // careerjet api does not support "remote" location
  // add remote to search
  let worksite;
  if (location.match(/remote/i) || location.match(/anywhere/i)) {
    keywords = `${location} ${keywords}`;
    location = '';
    worksite = 'Remote';
  }

  pagesize = parseInt(pagesize, 10);
  radius = parseInt(radius, 10);
  page = parseInt(page, 10);

  const careerjetAPI = new CareerJet({
    locale: 'en_US',
    affid: process.env.AFFID,
    user_ip: '192.0.0.1',
    user_agent: 'JobSite',
  });

  console.log(careerjetAPI);

  careerjetAPI
    .location(location)
    .keywords(keywords)
    .sortBy(sortBy)
    .pagesize(pagesize)
    .radius(radius)
    .page(page)
    .employmentType(employmentType)
    .query()
    .then((data) => {
      const results = data.data;

      results.employmentType = employmentType;
      // web scrape each returned url to get full description and external application url
      Promise.all(results.jobs.map(async (job, index) => {
        await axios.get(job.url)
          .then((response) => {
            const html = response.data;
            const $ = cheerio.load(html);
            const description = $('.content');
            // const companyURL = $('.source').children('a').attr('href');
            results.jobs[index].description = description.html();
            results.jobs[index].experienceLevel = randomExperienceLevel();
            results.jobs[index].worksite = worksite || randomWorksite();
            // possible use regex to change /n in description to <br/>
            // results.jobs[index].applyExternal = 'careerjet.com' + companyURL;
          });
      }))
        .then(() => res.send(results.jobs));
    })
    .catch((err) => console.log(err));
};

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