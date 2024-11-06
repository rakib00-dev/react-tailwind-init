import { useEffect, useState } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';

const JobListings = ({ isHome = false }) => {
  // const jobListings = isHome ? jobs.slice(0, 3) : jobs;`

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      let apiURL = isHome
        ? 'http://localhost:8000/jobs?_limit=3'
        : 'http://localhost:8000/jobs';

      try {
        const res = await fetch(apiURL);
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.log('Error to fetch data of jobs', err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>

        {loading ? (
          <Spinner loading={loading}></Spinner>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job}></JobListing>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
