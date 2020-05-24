import React, { useEffect, useState } from 'react';
import services from '../../services';
import './App.css';
import { IJob } from '../../interfaces';

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [jobs, setJobs] = useState<Array<IJob>>([]);

  useEffect(() => {
    async function getJobs () {
      const jobs = await services.getJobs();
      setJobs(jobs);
      setLoading(false);
    };

    if(loading) {
      getJobs();
    }

  },[loading])

  
  if (loading) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return (
    <div className="App">
      {
        jobs.map(job => <p>{job.id}</p>)
      }
    </div>
  )
}

export default App;
