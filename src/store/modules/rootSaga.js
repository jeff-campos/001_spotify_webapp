import { all } from 'redux-saga/effects';

import auth from './auth/saga';
import historic from './historic/saga';

export default function* rootSaga() {
  return yield all([auth, historic]);
}
