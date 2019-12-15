import usersReducer from './usersReducer'
import projectReducer from './projectReducer'
import ticketReducer from './ticketReducer'
import {combineReducers} from 'redux'

//combining all the reducer into allReducers
const rootReducers = combineReducers({
    users: usersReducer,
    projects: projectReducer,
    tickets: ticketReducer
})
export default rootReducers