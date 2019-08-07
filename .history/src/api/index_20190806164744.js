import axios from 'axios';
import queryString from 'query-string';

const BASE_URL = "https://search.bossjob.com/api/v1";
const SEARCH_JOBS_URL = BASE_URL + "/search/job_filter?";

/**
 * Search jobs request
 * @param {{size: number, query: string, page: number}} options
 */
export const searchJobs = (options) => {
    return axios.get(SEARCH_JOBS_URL + queryString.stringify(options))
        .then(response => response)
        .catch(error => error);
}
