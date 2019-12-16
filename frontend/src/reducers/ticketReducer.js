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
        default:
            return state
    }
}
export default ticketsReducer