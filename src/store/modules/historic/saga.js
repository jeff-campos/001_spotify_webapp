import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../app/services/api';

import { searchSuccess, searchFailure } from './actions';
import { signOut } from '../auth/actions';

export function* searchRequest({ payload }) {
  try {
    const response = yield call(api.get, 'search', {
      params: {
        q: payload.data,
        type: 'track,album',
        limit: 20,
      },
    });
    yield put(searchSuccess(response.data));
  } catch (err) {
    const {
      data: {
        error: { status },
      },
    } = err.response;
    yield put(searchFailure());
    yield put(signOut(status));
  }
}

export default all([takeLatest('@historic/SEARCH_REQUEST', searchRequest)]);
