import React, { useEffect, useState } from 'react';
import services from '../../services';
import './ListingsPage.scss';
import { IJob } from '../../interfaces';
import Listing from '../Listing/Listing';
import LazyLoad from 'react-lazyload';

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
            <div />
            :
            (
              <React.Fragment>
                <div id="listings">
                  {
                    jobs.map(job =>
                      (
                        <LazyLoad 
                          once 
                          placeholder={<Listing />}
                          offset={100}
                        >
                          <Listing key={job.id} job={job} />
                        </LazyLoad>
                      ) 
                    )
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
