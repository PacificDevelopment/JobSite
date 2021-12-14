const axios = require('axios');

// front-end call will look like
// axios call to url:port
const oneClickHandler = (event) => {
  const job_post_id = event.target.dataset.listing_id;
  // const session_id = pull from local storage ******localStorage.getItem('sessionID') === 'true';
  axios.post('/oneclick', {
    job_post_id,
    session_id,
  })
    .then((data) => setPostingApplied(true))
    .catch((err) => console.log('YOU DONE MESSED UP AARON', err));
};
/*
<StyledButton
data-trackingid="Overview ImageResize"
onClick={(event) => {
  clickTracker(event);
}}

const clickTracker = (event) => {
  const we = event.target.dataset.trackingid.split(' ');
  // console.log('clicked ID', we);
  // console.log('clicked className', event.target.className);
  const clickData = {
    element: we[1],
    widget: we[0],
    time: Date(),
  };
  // console.log('You have clicked', clickData);
  axios.post('/interactions', clickData)
    .then((data) => {
      console.log('success!', data);
    })
    .catch((err) => console.log(err));
};
*/
