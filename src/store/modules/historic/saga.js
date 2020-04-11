import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../app/services/api';

import { searchSuccess, searchFailure } from './actions';

export function* searchRequest({ data }) {
  try {
    const response = yield call(api.get, 'search', {
      q: data,
      type: 'album,artist',
    });
    yield put(searchSuccess(response));
  } catch (err) {
    toast.error('Erro na sua busca!');
    yield put(searchFailure());
  }
}

export default all([takeLatest('@historic/SEARCH_REQUEST', searchRequest)]);
