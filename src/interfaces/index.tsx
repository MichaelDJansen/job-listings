export type getJobsResponse = Array<IJob>;

export type IJob = {
    id: number,
    company: string,
    logo: string,
    new: boolean,
    featured: boolean,
    position: string,
    role: string,
    level: string,
    postedAt: string,
    contract: string,
    location: string,
    languages?: Array<string>
    tools?: Array<string>
    filters: Array<string>
}