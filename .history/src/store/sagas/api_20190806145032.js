import { call, put, takeEvery } from "redux-saga/effects";
import axios from 'axios';

import * as apiActions from "../actions/api";
import * as jobsActions from "../actions/jobs";

const { types: apiActionTypes } = apiActions;
const { types: jobsActionTypes } = jobsActions;

/**
 * Initiates authenticating
 * Sets authenticating to true, calls api login and set success/error based on response
 * @param {{ payload: { size: number, query: string, page: number } }} param0
 */
export const searchJobs = function* ({ payload }) {
    yield put(jobsActions.setSearchStatus(true));
    const { size, query, page } = payload,
        { response, error } = yield call(exactaAPI.login, login, password, app);
    console.log(currentActionType, { response, error });
    if (response) {
        const { token, userId, app, apps } = ExactaAPI.handleSuccess(response);
        const applications = apps || [app];
        yield put(authActions.loginSuccess(token, userId, login, applications));
    } else {
        const { errorResponse } = ExactaAPI.handleError(error);
        if (errorResponse) {
            const { status: errorStatus, data: errorData } = errorResponse;
            switch (errorStatus) {
                case 401:
                    yield put(authActions.loginError(errorData.error));
                    break;
                default:
                    yield put(authActions.loginError(errorStatus));
            }
        } else {
            yield put(authActions.loginError("login-error"));
        }
    }
    yield put(jobsActions.setSearchStatus(false));
};

const actionWatcher = function* () {
    yield takeEvery(apiActionTypes.SEARCH_JOBS, searchJobs);
};

export default actionWatcher;
