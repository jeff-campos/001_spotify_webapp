import { combineReducers } from 'redux';

import auth from './auth/reducer';
import historic from './historic/reducer';

export default combineReducers({
  auth,
  historic,
});
