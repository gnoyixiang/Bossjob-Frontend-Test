import * as api from '../../api';
import { types as jobsActionTypes} from '../actions/jobs';

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
        dispatch(jobsActionTypes.SET_SEARCH_STATUS(true))
        return api.searchJobs(options);
    };
};



