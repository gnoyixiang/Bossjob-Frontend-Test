import { call, put, takeEvery } from "redux-saga/effects";

import * as apiActions from "../actions/api";
import * as jobsActions from "../actions/jobs";
import * as api from '../../api';

const { types: apiActionTypes } = apiActions;
const { types: jobsActionTypes } = jobsActions;

/**
 * Search jobs
 * @param {{ payload: { size: number, query: string, page: number } }} param0
 */
export const searchJobs = function* ({ payload }) {
    yield put(jobsActions.setSearchStatus(true));
    const { options } = payload,
        { response, error } = yield call(api.searchJobs, options);
    console.log('searchJobs saga', { response, error });
    // if (response) {
    //     const { token, userId, app, apps } = ExactaAPI.handleSuccess(response);
    //     const applications = apps || [app];
    //     yield put(authActions.loginSuccess(token, userId, login, applications));
    // } else {
    //     const { errorResponse } = ExactaAPI.handleError(error);
    //     if (errorResponse) {
    //         const { status: errorStatus, data: errorData } = errorResponse;
    //         switch (errorStatus) {
    //             case 401:
    //                 yield put(authActions.loginError(errorData.error));
    //                 break;
    //             default:
    //                 yield put(authActions.loginError(errorStatus));
    //         }
    //     } else {
    //         yield put(authActions.loginError("login-error"));
    //     }
    // }
    yield put(jobsActions.setSearchStatus(false));
};

const actionWatcher = function* () {
    yield takeEvery(apiActionTypes.SEARCH_JOBS, searchJobs);
};

export default actionWatcher;
