import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';
import difference from 'lodash.difference';
import includes from 'lodash.includes';

import services from '../../services';
import './ListingsPage.scss';
import { IJob } from '../../interfaces';
import Listing from '../Listing/Listing';
import Tag from '../Tag/Tag';

const ListingsPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [jobs, setJobs] = useState<Array<IJob>>([]);
  const [filters, setFilters] = useState<Array<string>>([]);
  const [filteredJobs, setFilteredJobs] = useState<Array<IJob>>([]);

  useEffect(() => {
    async function getJobs() {
      const jobs = await services.getJobs();

      setJobs(jobs);
      setFilteredJobs(jobs);
      setFilters(['Frontend', 'Senior', "JavaScript"])
      setLoading(false);
    };

    if (loading) {
      getJobs();
    }

  }, [loading])

  const filterJobs = () => {
    console.log('hey');
  };

  const onFilterAdd = (filter: string) => {
    if(!includes(filters, filter)) {
      setFilters([...filters, filter]);  
    }
  };

  const onFilterRemove = (index: number) => {
    if (filters[index]) {
      let _filters = filters;
      _filters.splice(index, 1);
      setFilters([..._filters]);
    }
  }

  return (
    <div id="listing-page">
      <div className="banner-image" />
      <div id="content-container">
        {
          filters 
          && 
          filters.length > 0
          &&
          <div id="filter-container" className="bg-white br2 pa3 shadow-5">
            {filters.map((filter, index) => (
              <Tag  
                key={index}
                bgColour={"hsl(180, 31%, 95%)"}
                colour={"hsl(180, 29%, 50%)"}
                size="large"
                className="mr3 br2"
                textClasses="pa2"
                text={filter}
                index={index}
                onRemove={onFilterRemove}
              />
            ))}
          </div>
        }
        {
            loading
            ?
            <div />
            :
            (
              <React.Fragment>
                <div id="listings" className={filters && filters.length === 0 ? 'pt3' : ''}>
                  {
                    filteredJobs.map(job => (
                        <LazyLoad
                          once
                          placeholder={<Listing />}
                          offset={100}
                          key={job.id}
                        >
                          <Listing key={job.id} job={job} onFilterClick={onFilterAdd} />
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
