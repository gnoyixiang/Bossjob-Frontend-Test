import { types } from '../actions/jobs';

const initialState = {
    jobs: {},
    search: [],
};

const updateJobs = (state, payload) => {
    const { jobs } = payload,
        updatedJobs = {
            ...state.jobs,
            ...jobs.reduce((jobsObj, job) => ({
                ...jobsObj,
                [job.id]: job
            }), {})
        }
    return { ...state, jobs: updatedJobs };
};

const updateSearch = (state, payload) => {
    const { jobIds } = payload;
    return { ...state, search: jobIds };
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.UPDATE_JOBS:
            return updateJobs(state, payload);
        case types.UPDATE_SEARCH:
            return updateSearch(state, payload);
        default:
            return state;
    }
};

export default reducer;