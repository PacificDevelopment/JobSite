import React, { useContext } from 'react';
import { Slider, Label } from '@mui/material'
import { JobSearchContext } from './JobSearchContext.jsx'


const SalarySlider = () => {

  let { salary, setSalary } = useContext(JobSearchContext);
  let updateSalaryRange = (event, newSalary) => setSalary(newSalary)

  const marks = [
    {
      value: 0,
      label: '0'
    },
    {
      value: 50,
      label: '50'
    },
    {
      value: 100,
      label: '100'
    },
    {
      value: 150,
      label: '150'
    },
    {
      value: 200,
      label: '200+'
    }
  ]
  const formatLabel = (x) => x = '$' + x + (x=== 0 ? '' : 'K') + (x === 200 ? '+' : '')

  return (
    <Slider
      onChange={updateSalaryRange}
      min={0}
      max={200}
      step={2}
      defaultValue={salary}
      marks={marks}
      valueLabelFormat={formatLabel}
      valueLabelDisplay={'auto'}
    />
  );
}

export default SalarySlider;
