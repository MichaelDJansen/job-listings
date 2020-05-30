import React, { useEffect, useState } from 'react';
import services from '../../services';
import './ListingsPage.scss';
import { IJob } from '../../interfaces';
import Listing from '../Listing/Listing';

const ListingsPage: React.FC = () => {
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

  }, [loading])

  return (
    <div id="listing-page">
      <div className="banner-image"/>
      <div id="content-container">
        {
            loading
            ?
            <div>
              Loading...
            </div>
            :
            (
              <React.Fragment>
                <div className="listings">
                  {
                    jobs.map(job => <Listing key={job.id} job={job} />)
                  }
                </div>
              </React.Fragment>
            )
        }
      </div>
    </div>
  )
}

export default ListingsPage;
