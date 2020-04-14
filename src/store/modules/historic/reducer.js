import produce from 'immer';

const INITIAL_STATE = {
  latestSearch: {},
  loading: false,
  userAlbuns: [],
};

export default function historic(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@historic/SEARCH_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@historic/SEARCH_SUCCESS': {
        draft.latestSearch = action.payload;
        draft.loading = false;
        break;
      }
      case '@historic/SEARCH_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@historic/USER_SET_ALBUM': {
        draft.userAlbuns = state.userAlbuns.every(
          album => album.id !== action.payload.album.id
        )
          ? [...state.userAlbuns, action.payload.album]
          : state.userAlbuns;
        break;
      }
      default:
    }
  });
}
