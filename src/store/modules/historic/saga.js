import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../app/services/api';

import { searchSuccess, searchFailure } from './actions';
import { signOut } from '../auth/actions';

export function* searchRequest({ payload }) {
  try {
    const response = yield call(api.get, 'search', {
      params: {
        q: payload.data,
        type: 'track,album',
        limit: 5,
      },
    });
    yield put(searchSuccess(response.data));
  } catch (err) {
    toast.error(
      'Você foi deslogado porque seu token está expirado ou inválido'
    );
    yield put(searchFailure());
    yield put(signOut());
  }
}

export default all([takeLatest('@historic/SEARCH_REQUEST', searchRequest)]);
