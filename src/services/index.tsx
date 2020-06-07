import { IJob } from "../interfaces";

interface IServices {
    getJobs: () => Promise<Array<IJob>>
};

const services: IServices = {
    getJobs: async () => {
        try {
            let jobsRequest = await fetch('/data.json');

            if (jobsRequest.ok) {
                const jobsRes = await jobsRequest.json() as Array<IJob>;
                
                const jobs = jobsRes.map(job => {
                    let _job = job;
                    _job.filters = [];
                    if (_job.role) {
                        _job.filters.push(_job.role)
                    }
                    if(job.level) {
                        _job.filters.push(_job.level)
                    }
                    if (_job.languages) {
                        _job.filters.push(..._job.languages);
                    }
                    if (_job.tools) {
                        _job.filters.push(..._job.tools);
                    }
                    return _job;
                })
                return jobs;
            }
        } catch (err) {
            console.log(err);
            throw err;
        }

        return new Array<IJob>();
    },
};

export default services;