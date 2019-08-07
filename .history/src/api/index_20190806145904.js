import axios from 'axios';


const BASE_URL = "https://search.bossjob.com/api/v1";
const SEARCH_JOBS_URL = BASE_URL + "/search/job_filter?";

/**
 * Search jobs request
 * @param {{size: number, query: string, page: number}} options
 */
export const searchJobs = (options) => {
    axios.get(SEARCH_JOBS_URL)
        .then(response => ({ response }))
        .catch(error => ({ error }));
}
