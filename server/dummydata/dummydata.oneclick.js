
const dummydata = {
  joblistings: [
    {
      listingID: 1,
      employerID: 101,
      jobTitle: "Soft-where? Developer"
    },
    {
      listingID: 2,
      employerID: 102,
      jobTitle: "Archi's Tech"
    }]
  jobseekers: [{
    seekerID: 11,
    passwordHash: "ax79$$#v8",
    passwordSalt: "saltines",
    sessionID: 55555,
    resume: "filler.pdf",
    coverletter: "thisisacoverletter.docx"
  }, {
    seekerID: 12,
    passwordHash: "ax79$$#v9",
    passwordSalt: "saltines",
    sessionID: 55556,
    resume: "filler.pdf",
    coverletter: "thisisacoverletter.docx"
  }]
  applications: [{
    id,
    employerID,
    listingID,
    seekerID,
    resume,
    coverletter
  }]
  employers: [{
    employerID: 101,
    passwordHash: "ax79$$#v10",
    passwordSalt: "saltines",
    sessionID: 55557
  }, {
    employerID: 102,
    passwordHash: "ax79$$#v11",
    passwordSalt: "saltines",
    sessionID: 55558
  }]
}

module.exports = dummydata;