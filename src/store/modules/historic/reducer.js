import produce from 'immer';

const INITIAL_STATE = {
  latestSearch: {},
  loading: false,
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
        draft.latestSearch = state.latestSearch;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
