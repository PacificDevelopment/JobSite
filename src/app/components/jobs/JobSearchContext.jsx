import React, { createContext, useContext, useState } from 'react';


export const JobSearchContext = createContext(null);

const JobSearchProvider = (props) => {

  let [range, setRange] = useState(null);
  let [drawer, setDrawer] = useState(false);
  let [keywords, setKeywords] = useState('');
  let [location, setLocation] = useState('');
  let [sortBy, setSortBy] = React.useState('');
  let [salary, setSalary] = useState([0, 200]);
  let [datePosted, setDatePosted] = useState(null);
  let [experience, setExperience] = useState(null);
  let [employmentType, setEmploymentType] = useState(null);
  let [query, setQuery] = useState({keywords: keywords, location: location, params: []});

  return (
    <JobSearchContext.Provider value={{
      range,
      setRange,
      sortBy,
      setSortBy,
      drawer,
      setDrawer,
      salary,
      setSalary,
      location,
      setLocation,
      keywords,
      setKeywords,
      datePosted,
      setDatePosted,
      experience,
      setExperience,
      employmentType,
      setEmploymentType
    }}>
      { props.children }
    </JobSearchContext.Provider>
  )
}

export default JobSearchProvider;
/*
params = {
  salary: [int, int] //filter results from API server-side,
  sortBy: '', //default null
  radius: int,
  emplymentType: 't' || 'p',




}

*/