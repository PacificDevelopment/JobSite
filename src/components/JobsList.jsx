import SearchListings from "./SearchListings.jsx";

const JobsList = () => {
  const [jobsList, setJobs] = useState({});

  const getJobs = () => {
    axios.get('api/jobs')
      .then(results => {
        setJobs(results.data);
        console.log('hopefully a jobs list', results.data)
      })
      .catch((err) =>{
        console.log('get request failed')}
        )
  }

  useEffect(() => {
    getJobss()
  }, []);

  return (
    <div>
      <SearchJobs  />
    </div>
  )
}

export default JobsList;