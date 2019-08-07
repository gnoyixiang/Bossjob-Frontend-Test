import * as api from '../../api';

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
        return api.searchJobs(options).then(
            response => dispatch(makeASandwich(forPerson, sauce)),
            error => dispatch(apologize('The Sandwich Shop', forPerson, error))
        );
    };
} action(types.SEARCH_JOBS, { options });



