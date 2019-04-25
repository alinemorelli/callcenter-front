import * as actionTypes from './actionsTypes'
import axios from '../../client/axios'

export const getDashboardDataSuccess = (activeCalls) => {
  return {
    type: actionTypes.GET_DASHBOARD_DATA,
    activeCalls: activeCalls
  }
}

export const getDashboardData = (url) => {
  return (dispatch) => {
    axios.get(url)
    .then(response => {
      dispatch(getDashboardDataSuccess(response.data))
    })
    .catch(error => {
      //TODO: handle error when implemented
    })
  }
}
