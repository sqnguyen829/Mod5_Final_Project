const initialState = {
    tickets:[{title:'ticket'}],
    displayTickets:['ticket'],
    isTicketLoaded:false
}

const ticketsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ALL_TICKETS':
            // console.log(action.tickets)
            // debugger
            return {
                ...state,
                tickets:action.ticketsData,
                displayTickets:action.ticketsData,
                isTicketLoaded:true
            }
        // case 'ADD_NEW_TICKET':
        //     return {
        //         ...state,
        //         tickets:[...state.projects, action.newProject],
        //         displayTickets:[...state.displayProjects, action.newProject]
        //     }
        case 'UNLOAD_TICKETS':
            return {
                ...state,
                isTicketLoaded:false
            }
        default:
            return state
    }
}
export default ticketsReducer