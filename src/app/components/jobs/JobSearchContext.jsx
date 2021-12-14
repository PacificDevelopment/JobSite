import React, { createContext, useState } from 'react';

export const JobSearchContext = createContext(null);

const JobSearchProvider = (props) => {
  const [range, setRange] = useState(null);
  const [drawer, setDrawer] = useState(false);
  const [keywords, setKeywords] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = React.useState('');
  const [salary, setSalary] = useState([0, 200]);
  const [datePosted, setDatePosted] = useState(null);
  const [experience, setExperience] = useState(null);
  const [employmentType, setEmploymentType] = useState(null);
  const [query, setQuery] = useState('');

  return (
    <JobSearchContext.Provider value={{
      query,
      setQuery,
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
      setEmploymentType,
    }}
    >
      {props.children}
    </JobSearchContext.Provider>
  );
};

export default JobSearchProvider;
