const initialState = {
    tickets:[{title:'ticket'}],
    displayTickets:['ticket']
}

const ticketsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ALL_TICKETS':
            return {
                ...state,
                tickets:action.tickets,
                displayTickets:action.tickets
            }
        // case 'ADD_NEW_TICKET':
        //     return {
        //         ...state,
        //         tickets:[...state.projects, action.newProject],
        //         displayTickets:[...state.displayProjects, action.newProject]
        //     }
        default:
            return state
    }
}
export default ticketsReducer