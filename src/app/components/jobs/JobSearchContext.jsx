import React, { createContext, useContext, useState } from 'react';


export const JobSearchContext = createContext(null);

const JobSearchProvider = (props) => {

  let [range, setRange] = useState(null);
  let [sortBy, setSortBy] = React.useState('')
  let [datePosted, setDatePosted] = useState(null);
  let [employmentType, setEmploymentType] = useState(null);
  let [keywords, setKeywords] = useState('');
  let [salary, setSalary] = useState([0, 200]);
  let [drawer, setDrawer] = useState(false);
  let [query, setQuery] = useState({keywords: keywords, params: {}});

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
      keywords,
      setKeywords,
      datePosted,
      setDatePosted,
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