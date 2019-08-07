import action from '.';

export const types = {
    /** Saga actions */
    SEARCH_JOBS: 'SEARCH_JOBS',
};

/**
 * Create a Saga action to search jobs
 * @param {{size: number, query: string, page: number}} options
 */
export const searchJobs = (options) => action(types.SEARCH_JOBS, { ...options });



