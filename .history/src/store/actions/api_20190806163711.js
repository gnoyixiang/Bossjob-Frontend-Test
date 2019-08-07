import * as api from '../../api';
import * as jobsActions from '../actions/jobs';

export const types = {
    /** Saga actions */
    SEARCH_JOBS: 'SEARCH_JOBS',
};

/**
 * Create a saga action to search jobs
 * @param {{size: number, query: string, page: number}} options
 */
export const searchJobs = (options) => {
    return (dispatch) => {
        dispatch(jobsActions.setSearchStatus({ searching: true }));
        return api.searchJobs(options)
            .then(response => {
                const { config, request, data: responseData } = response;
                console.log('searchJobs response', response, config, request, responseData);
                if (request.status !== 200) {
                    dispatch(jobsActions.setSearchStatus({
                        searching: false,
                        error: {
                            status: request.status
                        }
                    }));
                    return;
                }
                const { data } = responseData;
                const { jobs, ...restData } = data;
                dispatch(jobsActions.updateSearch({
                    jobIds: jobs.map(job => job.id),
                    ...restData,
                }));
                dispatch(jobsActions.setSearchStatus({ searching: false, error: false }));
            })
            .catch(error => {
                console.log('searchJobs error', error);
                dispatch(jobsActions.setSearchStatus({ searching: false, error: true }));
            });
    };
};



