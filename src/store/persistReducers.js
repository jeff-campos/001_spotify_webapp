import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducer =>
  persistReducer(
    {
      key: 'xpTestSpotify',
      storage,
      whitelist: ['auth', 'historic'],
    },
    reducer
  );
