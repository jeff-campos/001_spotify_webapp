export function signInRequest(token) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { token },
  };
}

export function signInSuccess(token) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut(status) {
  return {
    type: '@auth/SIGN_OUT',
    payload: { status },
  };
}
