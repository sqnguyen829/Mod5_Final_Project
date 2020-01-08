const initialState = {
    displayGraph:true
}

const graphReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SHOW_GRAPH':
            return {
                ...state,
                displayGraph:true
            }
        case 'HIDE_GRAPH':
            return {
                ...state,
                displayGraph:false
            }
        default:
            return state
    }
}
export default graphReducer
