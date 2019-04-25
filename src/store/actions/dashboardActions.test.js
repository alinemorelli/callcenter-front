import * as actions from './dashboardActions'
import * as types from './actionsTypes'
import { random, phone } from 'faker'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import expect from 'expect'

const activeCalls = [{
  call_id: random.uuid(),
  their_number: phone.phoneNumber()
}]

describe('actions', () => {
  it('should create an action to get dashbaord data', () => {
    const expectedAction = {
      type: types.GET_DASHBOARD_DATA,
      activeCalls
    }
    expect(actions.getDashboardDataSuccess(activeCalls)).toEqual(expectedAction)
  })
})

describe('get dashboard data', () => {
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)
  const store = mockStore({})
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates GET_DASHBOARD_DATA when fetching todos has been done', () => {
    fetchMock.getOnce('/dashboard', {
      body: { data: activeCalls },
      headers: { 'content-type': 'application/json' }
    })

    store.dispatch(actions.getDashboardData(activeCalls))
    expect(store.getActions()).toMatchSnapshot()
  })
})
