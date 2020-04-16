import { runSaga } from 'redux-saga'
import MockAdapter from 'axios-mock-adapter'
import api from '../../../src/app/services/api'
import { searchSuccess, searchFailure } from '../../../src/store/modules/historic/actions'
import { searchRequest } from '../../../src/store/modules/historic/saga'
import { response, err } from '../../../__mocks__/searchRequest'

const apiMock = new MockAdapter(api)

describe('Historic Saga', () => {
  it('should be able to feth tracks and albums', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('search').reply(200, { data: response })
    await runSaga({ dispatch }, searchRequest, { payload: { data: 'FKJ' } }).toPromise();

    expect(dispatch).toHaveBeenCalledWith(searchSuccess({ data: response }))
  })

  it('The request must fail', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('search').reply(401, err)
    await runSaga({ dispatch }, searchRequest, { payload: { data: 'FKJ' } }).toPromise();

    expect(dispatch).toHaveBeenCalledWith(searchFailure(err))
  })
})