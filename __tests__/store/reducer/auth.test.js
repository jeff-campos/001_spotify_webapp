import reducer, { INITIAL_STATE } from '../../../src/store/modules/auth/reducer'
import * as Auth from '../../../src/store/modules/auth/actions'

describe('Auth Reducer', () => {

  it('SIGN_IN_REQUEST', () => {
    const state = reducer(INITIAL_STATE, Auth.signInRequest('token'))
    expect(state).toStrictEqual({ loading: true, signed: false, token: null })
  })

  it('SIGN_IN_SUCCESS', () => {
    const state = reducer(INITIAL_STATE, Auth.signInSuccess('token'))
    expect(state).toStrictEqual({ loading: false, signed: true, token: 'token' })
  })

  it('SIGN_FAILURE', () => {
    const state = reducer(INITIAL_STATE, Auth.signFailure())
    expect(state).toStrictEqual({ loading: false, signed: false, token: null })
  })

  it('SIGN_OUT', () => {
    const state = reducer(INITIAL_STATE, Auth.signOut(401))
    expect(state).toStrictEqual({ loading: false, signed: false, token: null })
  })

})