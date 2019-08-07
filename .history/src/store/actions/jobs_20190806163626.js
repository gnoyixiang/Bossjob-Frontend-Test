import action from '.';

export const types = {
    /** Redux actions */
    UPDATE_JOBS: 'UPDATE_JOBS',
    UPDATE_SEARCH: 'UPDATE_SEARCH',
    SET_SEARCH_STATUS: 'SET_SEARCH_STATUS',
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
export const updateSearch = (jobIds) => action(types.UPDATE_SEARCH, { jobIds });

/**
 * Create a redux action to set search status
 * @param {{searching: boolean, error: boolean || {}}} searchStatus
 */
export const setSearchStatus = (searchStatus) => action(types.SET_SEARCH_STATUS, { searchStatus });

