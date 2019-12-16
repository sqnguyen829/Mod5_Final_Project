import usersReducer from './usersReducer'
import projectsReducer from './projectReducer'
import ticketReducer from './ticketReducer'
import {combineReducers} from 'redux'

//combining all the reducer into allReducers
const rootReducers = combineReducers({
    users: usersReducer,
    projects: projectsReducer,
    tickets: ticketReducer
})
export default rootReducers