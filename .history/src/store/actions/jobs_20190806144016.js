import action from '.';

export const types = {
    /** Redux actions */
    UPDATE_JOBS: 'UPDATE_JOBS',
    UPDATE_SEARCH: 'UPDATE_SEARCH',
};

/**
 * Create a redux action to add/update jobs
 * @param {[{}]} jobs
 */
export const updateJobs = (jobs) => action(types.UPDATE_JOBS, { jobs });

/**
 * Create a redux action to update search
 * @param {[string]} jobIds
 */
export const updateSearch = (jobIds) => action(types.UPDATE_JOBS, { jobIds });

