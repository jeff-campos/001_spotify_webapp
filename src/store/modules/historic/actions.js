export function searchRequest(data) {
  return {
    type: '@historic/SEARCH_REQUEST',
    payload: { data },
  };
}

export function searchSuccess(data) {
  return {
    type: '@historic/SEARCH_SUCCESS',
    payload: { data },
  };
}

export function searchFailure() {
  return {
    type: '@historic/SEARCH_FAILURE',
  };
}

export function setAlbum(data) {
  return {
    type: '@historic/SET_ALBUM',
    payload: { data },
  };
}
