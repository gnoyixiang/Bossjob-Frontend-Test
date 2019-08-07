import { call, put, takeEvery } from "redux-saga/effects";
import axios from 'axios';

import * as apiActions from "../actions/api";
import * as jobsActions from "../actions/jobs";

const { types: apiActionTypes } = apiActions;
const { types: jobsActionTypes } = jobsActions;

/**
 * Initiates authenticating
 * Sets authenticating to true, calls api login and set success/error based on response
 * @param {{ payload: { login: string, password: string, app: string } }} param0
 */
export const login = function* ({ payload, type: currentActionType }) {
    yield put(authActions.authenticating());
    const { login, password, app } = payload,
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
};

const actionWatcher = function* () {
    yield takeEvery(apiActionTypes.INSTANTIATE_API, instantiateAPI);
    yield takeEvery(apiActionTypes.SET_API_AUTHORIZATION_TOKEN, setAPIAuthorizationToken);

    yield takeLatest(apiActionTypes.API_LOGIN, login);
    yield takeLatest(apiActionTypes.API_SELECT_APP, selectApp);
    yield takeLatest(apiActionTypes.API_LOGOUT, logout);
    yield takeEvery(apiActionTypes.API_SEARCH_PROCESSES, searchProcesses);
    yield takeEvery(apiActionTypes.API_EXECUTE, execute);
    yield takeEvery(apiActionTypes.API_INSTALL, install);
    yield takeEvery(apiActionTypes.API_GET_PROCESSES, getProcesses);
    yield takeEvery(apiActionTypes.API_GET_CHOICE_GROUPS, getChoiceGroups);
    yield takeEvery(apiActionTypes.API_SEARCH_COUNTONLY, searchCountOnly);
    yield takeEvery(apiActionTypes.API_UNSUBSCRIBE_PROCESSES, unsubscribeProcesses);
    yield takeEvery(apiActionTypes.API_DOWNLOAD, download);
};

export default actionWatcher;
