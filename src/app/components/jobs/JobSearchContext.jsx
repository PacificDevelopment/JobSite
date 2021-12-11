import React, { createContext, useContext, useState } from 'react';


export const JobSearchContext = createContext(null);

const JobSearchProvider = (props) => {

  let [range, setRange] = useState(null);
  let [sortBy, setSortBy] = React.useState('')
  let [datePosted, setDatePosted] = useState(null);
  let [employmentType, setEmploymentType] = useState(null);
  let [keywords, setKeywords] = useState('');
  let [salary, setSalary] = useState([null, null]);
  let [drawer, setDrawer] = useState(false);

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