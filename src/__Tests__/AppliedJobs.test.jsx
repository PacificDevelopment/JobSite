import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import App from '../components/App';
import '@testing-library/jest-dom';
import { within } from '@testing-library/dom'
import userEvent from '@testing-library/user-event';



describe('One-Click Apply button', () => {
  const testURL = 'http://localhost:3000/';
  const ButtonName = 'One-Click Apply';

  //an array of all jobtiles on the screen
  const JobTile = screen.getAllByTestId('jobtile') //change this to reflect the actual testid


  //before the test runs, render the App
  beforeEach(() => {
    render(<App />);
  });

  test('each job tile has a One-Click Apply button with a unique id', () => {
    //iterate through all job tiles, and check that they each contain a button
    JobTile.forEach(job => {
      const button = within(job).getByRole(button, { name: ButtonName })
      expect(button).toBeTruthy();
    })
  });
  test('if the user is NOT logged in, clicking One-Click Apply will rediredt them to Login page', () => {
    //check if user is logged in
    // click One-Click Apply
    const button = screen.getAllByRole(button, { name: ButtonName })[0]
    userEvent.click(button)

    //expect Login page to be on the screen
    const loginButton = s
    expect(screen.getByText(/Continue with Email/i)).toBeInTheDocument();
  });
  test('if the user is logged in, clicking One-Click Apply will send a call to the correct endpoint', () => {
    //check if user is logged in

    // click One-Click Apply
    const button = screen.getAllByRole(button, { name: ButtonName })[0]
    userEvent.click(button)

    //expect that a post request is sent to /oneclick

  });
  test('server receives the call and invokes a database function', () => {

  });
  test('Job listing is added to Applications table with correct data', () => {

  });
  test('"Applied" banner appears immediately on the job tile that was just applied to', () => {
    //click button

    //check for "Applied" banner
  });
  test('"Applied" banner appears consistently for all previously-applied jobs', () => {
    //upon page refresh, the banner still appears
  });
  test('Applied Jobs list shows the job that was just applied to', () => {
    //go to My Account
    //go to Applied Jobs list
    //see the new job application
  });
  test('The Employer Portal now shows the job applicaiton that was just submitted', () => {
    //log in as employer
    //visit Candidates page
    //see the new job application
  });
  test('abc', () => {

  });
  test('abc', () => {

  });
});
