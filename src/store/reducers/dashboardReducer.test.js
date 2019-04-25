import dashboardReducer from './dashboardReducer'
import * as actionTypes from '../actions/actionsTypes'
import { random, phone } from 'faker'

const activeCalls = [{
  call_id: random.uuid(),
  their_number: phone.phoneNumber()
}]

describe('dashboard reducer', () => {
  it('should return the initial state', () => {
    expect(dashboardReducer(undefined, {})).toEqual({"activeCalls": []})
  })

  it('should handle GET_DASHBOARD_DATA', () => {
    expect(
      dashboardReducer([], {
        type: actionTypes.GET_DASHBOARD_DATA,
        activeCalls
      })
    ).toEqual({ activeCalls })
  })
})
