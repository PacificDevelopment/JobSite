const axios = require('axios');

//front-end call will look like
//axios call to url:port


//server call will look like:
//listen at port
//app.get / app.post
//invoke queryTheDatabase(ids)

const oneClickModels = require('models.oneclick.js')

app.post('/oneclick', (req, res) => {
  let reqdata = req.body;
  oneClickModels.quickApply(reqdata.session_id, reqdata.job_post_id)
    .then((data) => console.log('WE ARE MASTERS'), data)
    .then((data) => res.status(200).send(data));
    .catch((err) => console.log('WHYYYYY', err));

})

//database model will look like:
//pool.connect connects to the postres database
//const queryTheDatabase = pool.query(query string, blah blah blah)
/*
Queries Job Seeker table --> return seekerID
Queries Job Seeker table (or resume table) -->
return the saved resume and saved CL
Queries Job Listing table --> return employerID
*/

const quickApply = async (session_id, job_post_id) => {
  let user = await pool.query('SELECT user_id FROM users WHERE session_id = $1', [session_id]);
  let resume = await pool.query('SELECT id FROM resumes WHERE user_id = $1', [user]);
  let coverLetter = await pool.query('SELECT id FROM cover_letters WHERE user_id = $1', [user]);
  let employerID = await pool.query('SELECT employer_id FROM job_posts WHERE id = $1', [job_post_id]);

  let response = await pool.query(`INSERT into Applications (employer_id, cover_letter_id, resume_id, job_post_id, user_id) values ($1, $2, $3, $4, $5)`,
    [employerID, coverLetter, resume, job_post_id, user])
  return response
}



//add an alert if resume or cover letter does not exist, tell the user to upload?


module.exports = {
  getInfo: () => axios({
    url: 'jdbc:postgresql://localhost/test',
    method: 'get',
  }),

  postResume: (obj) => axios({
    url: 'jdbc:postgresql://localhost/test',
    method: 'post',
    data: obj,
  }),
};

/*
const dbUser = require('../../dbconfig.js')
const mongoose = require('mongoose');
const mongoUri = `mongodb://${dbUser.username}:${dbUser.pwd}@3.19.74.12:27017/ProdReviews`;

mongoose.connect(mongoUri, {
  connectTimeoutMS: 60000
});

const db = mongoose.connection;

module.exports = db;
*/
