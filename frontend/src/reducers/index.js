import userReducer from './userReducer'
import projectReducer from './projectReducer'
import ticketReducer from './ticketReducer'
import {combineReducers} from 'redux'

//combining all the reducer into allReducers
const allReducers = combineReducers({
    users: userReducer,
    projects: projectReducer,
    tickets: ticketReducer
})
export default allReducers