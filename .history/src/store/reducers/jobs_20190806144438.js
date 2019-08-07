import { types } from '../actions/jobs';

const initialState = {
    jobs: {},
    search: [],
    searching: false
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

const setSearchStatus = (state, payload) => {
    const { searching } = payload;
    return { ...state, searching };
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.UPDATE_JOBS:
            return updateJobs(state, payload);
        case types.UPDATE_SEARCH:
            return updateSearch(state, payload);
        case types.SET_SEARCH_STATUS:
            return setSearchStatus(state, payload);
        default:
            return state;
    }
};

export default reducer;