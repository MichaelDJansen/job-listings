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
                return jobsRes;
            }
        } catch (err) {
            console.log(err);
            throw err;
        }

        return new Array<IJob>();
    },
};

export default services;