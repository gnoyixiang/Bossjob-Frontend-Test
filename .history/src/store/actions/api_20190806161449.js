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
                console.log('searchJobs response', response);
            })
            .catch(error => {
                dispatch(jobsActions.setSearchStatus({ searching: false, error: error }));
            });
    };
};



