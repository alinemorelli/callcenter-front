import dashboardReducer from './store/reducers/dashboardReducer'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(dashboardReducer, applyMiddleware(thunk))

export default store
