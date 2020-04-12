import { all, takeLatest, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../app/services/history';
import api from '../../../app/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  const { token } = payload;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
    yield put(signInSuccess(token));
    history.push('/home');
    return;
  }

  toast.error('Informe um token para entrar!');
  yield put(signFailure());
}

export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut({ payload }) {
  if (payload.status === 401) {
    toast.error(
      'Você foi deslogado porque seu token está expirado ou inválido'
    );
    return history.push('/');
  }
  if (payload.status === 403) {
    toast.error('A operacão falhou');
    return history.push('/home');
  }
  return history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
