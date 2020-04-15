import reducer, { INITIAL_STATE } from '../../../src/store/modules/historic/reducer'
import * as Historic from '../../../src/store/modules/historic/actions'
import { response, albumResponse } from '../../../__mocks__/searchRequest'
import { handleFormatAlbum } from '../../../src/app/helpers/formatData'



describe('Historic Reducer', () => {

  it('SEARCH_REQUEST', () => {
    const state = reducer(INITIAL_STATE, Historic.searchRequest('FKJ'))
    expect(state).toStrictEqual({
      latestSearch: {},
      loading: true,
      userAlbuns: []
    })
  })

  it('SEARCH_SUCCESS', () => {
    const state = reducer(INITIAL_STATE, Historic.searchSuccess(response))
    expect(state).toStrictEqual({
      latestSearch: {
        data: response
      },
      loading: false,
      userAlbuns: []
    })
  })

  it('SEARCH_FAILURE', () => {
    const state = reducer(INITIAL_STATE, Historic.searchFailure())
    expect(state).toStrictEqual({
      latestSearch: {},
      loading: false,
      userAlbuns: []
    })
  })

  it('USER_SET_ALBUM', () => {
    const dataFormat = handleFormatAlbum(albumResponse)
    const state = reducer(INITIAL_STATE, Historic.userSetAlbum(dataFormat))

    expect(state).toStrictEqual({
      latestSearch: {},
      loading: false,
      userAlbuns: [dataFormat.album]
    })
  })


})