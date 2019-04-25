import { connect } from 'react-redux'
import * as dashboardActions from '../../store/actions/dashboardActions'
import Dashboard from './Dashboard'

const mapStateToProps = (state) => {
  return {
    activeCalls: state.activeCalls
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (props) => dispatch(dashboardActions.getDashboardData('/dashboard', props))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
