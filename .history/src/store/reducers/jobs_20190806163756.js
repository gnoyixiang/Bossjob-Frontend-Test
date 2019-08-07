import { types } from '../actions/jobs';

const initialState = {
    data: {},
    search: {
        jobIds: []
    },
    searchStatus: {
        searching: false,
        error: false
    }
};

const updateJobs = (state, payload) => {
    console.log('updateJobs', state, payload);
    const { jobs } = payload,
        updatedData = {
            ...state.data,
            ...jobs.reduce((jobsObj, job) => ({
                ...jobsObj,
                [job.id]: job
            }), {})
        }
    return { ...state, data: updatedData };
};

const updateSearch = (state, payload) => {
    console.log('updateSearch', state, payload);
    const { search } = payload;
    return {
        ...state,
        search: search ? search : {
            jobIds: []
        }
    };
};

const setSearchStatus = (state, payload) => {
    console.log('setSearchStatus', state, payload);
    const { searchStatus } = payload;
    const updatedStatus = {
        ...state.searchStatus,
        ...searchStatus
    }
    return { ...state, searchStatus: updatedStatus };
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