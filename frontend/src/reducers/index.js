import usersReducer from './usersReducer'
import projectsReducer from './projectReducer'
import ticketsReducer from './ticketReducer'
import {combineReducers} from 'redux'

//combining all the reducer into allReducers
const rootReducers = combineReducers({
    users: usersReducer,
    projects: projectsReducer,
    tickets: ticketsReducer
})
export default rootReducers