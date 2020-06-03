import React from 'react';
import { IJob } from '../../interfaces';
import './Listing.scss';
import Tag from '../Tag/Tag';

type ListingProps = {
    job: IJob
}

const Listing: React.FC<ListingProps> = ({ job }) => {
    const renderJobTags = (job: IJob) => {
        if(job) {
            let tags = new Array<string>();

            if (job.role) {
                tags.push(job.role)
            }
            if(job.level) {
                tags.push(job.level)
            }
            if (job.languages) {
                tags.push(...job.languages);
            }
            if (job.tools) {
                tags.push(...job.tools);
            }

            return tags.map((tag, index) => (
                <Tag  
                    key={index}
                    bgColour={"hsl(180, 31%, 95%)"}
                    colour={"hsl(180, 29%, 50%)"}
                    size="large"
                    className="mr3 pa2"
                >
                    {tag}
                </Tag>
            ));
        }
        return null;
    }

    if (job) {
        return (
            <div className={`listing mb3 bg-white shadow-5 ph4 pv3 br2 ${job.featured ? 'featured-border' : ''}`}>
                <img className="listing-image" src={job.logo} alt={job.company} />
                <div className="listing-info flex flex-column justify-between">
                    <div>
                        <span className="listing-company-name mr3 f7">
                            {job.company}     
                        </span>
                        {
                            job.new
                            &&
                            <Tag 
                                bgColour={"hsl(180, 29%, 50%)"}
                                pill
                                size="small"
                                className="ttu"
                            >
                                New!
                            </Tag>
                        }
                        {
                            job.featured
                            &&
                            <Tag
                                bgColour={"hsl(180, 14%, 20%)"}
                                pill
                                size="small"
                                className="ttu"
                            >
                                Featured
                            </Tag>
                        }
                    </div>
                    <span className="listing-position f6">
                        {job.position}
                    </span>
                    <span className="listing-more-info f7">
                        {`${job.postedAt} · ${job.contract} · ${job.location}`}
                    </span>
                </div>
                <div className="listing-tags-container flex items-center justify-end flex-wrap">
                    {
                        renderJobTags(job)
                    }
                </div>
            </div>
        );
    }
    return null;
}

export default Listing;