const initialState = {
    tickets:[{title:'ticket'}],
    displayTickets:['ticket'],
    isTicketLoaded:false
}

const ticketsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ALL_TICKETS':
            return {
                ...state,
                tickets:action.ticketsData,
                displayTickets:action.ticketsData,
                isTicketLoaded:true
            }
        case 'ADD_NEW_TICKET':
            return {
                ...state,
                tickets:[...state.tickets, action.ticket],
                displayTickets:[...state.displayTickets, action.ticket]
            }
        // case 'REMOVE_TICKET':
        //     console.log(action.ticket)
        //     console.log(state.displayTickets)
        //     debugger
        //     return {
        //         ...state,
        //         tickets:state.tickets.filter( ticket=> ticket.id !== action.ticket.id),
        //         displayTickets:state.displayTickets.filter( ticket=> ticket.id !== action.ticket.id)
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