import * as actionTypes from '../actions/actionsTypes'

const initialState = {
  activeCalls: []
}

const executeGetDashboardDataSuccess = (state, action) => {
  return {
    ...state,
    activeCalls: action.activeCalls
  }
}

const dashboardData = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DASHBOARD_DATA:
      return executeGetDashboardDataSuccess(state, action)
    default:
      return state
  }
}

export default dashboardData
