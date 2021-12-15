const axios = require('axios');
const cheerio = require('cheerio');

require('dotenv').config();

const CareerJet = require('../models/API/careerJet');

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

exports.scrapeDescription = (req, res) => {
  const { url } = req.query;
  axios.get(url)
    .then((response) => {
      const html = response.data;

      const $ = cheerio.load(html);
      const description = $('.content');
      res.send(description.html());
    })
    .catch((err) => res.send(err));
};

exports.jobSearch = (req, res) => {
  let {
    location, // String
    keywords, // String
    // eslint-disable-next-line prefer-const
    sort, // String ('relevance', 'data', 'salary')
    pagesize = 10, // Integer
    radius, // Integer (5, 10, 50, 100)
    page = 1, // Integer
    // eslint-disable-next-line prefer-const
    employmentType, // String ('Full Time', 'Part Time', 'Temporary', 'Internship')
    // eslint-disable-next-line prefer-const
    experienceLevel, //String ('Entry', 'Mid', 'Senior', 'Executive')
    worksite, // String ('remote', 'onsite', 'mixed')

  } = req.query;

  keywords = experienceLevel && `${experienceLevel} ${keywords}`;

  // careerjet api does not support "remote" location
  // add remote to search
  if (location.match(/remote/i) || location.match(/anywhere/i)) {
    location = '';
    worksite = 'remote';
  }

  keywords = worksite === 'remote' && `Remote ${keywords}`;




  pagesize = parseInt(pagesize, 10);
  radius = parseInt(radius, 10);
  page = parseInt(page, 10);

  const careerjetAPI = new CareerJet({
    locale: 'en_US',
    affid: process.env.AFFID,
    user_ip: '192.0.0.1',
    user_agent: 'JobSite',
  });

  careerjetAPI
    .location(location)
    .keywords(keywords)
    .sortBy(sort)
    .pagesize(pagesize)
    .radius(radius)
    .page(page)
    .employmentType(employmentType)
    .query()
    .then((data) => {
      const results = data.data;
      if (results.jobs) {
      for (let i = 0; i < results.jobs.length; i++) {
        results.jobs[i].employmentType = employmentType;
        results.jobs[i].experienceLevel = experienceLevel || randomExperienceLevel();
        results.jobs[i].worksite = worksite || randomWorksite();
      }}
      res.send(results)
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