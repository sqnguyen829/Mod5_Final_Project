
const initState = {
    users:[],
    displayUsers:[],
    isLoggedIn:false
}

const usersReducer = (state=initState, action) =>{
    console.log(state)
    switch(action.type){
        case 'ALL_USERS':
            return {
                ...state,
                users:action.users,
                displayUsers:action.users,
                isLoggedIn:!state.isLoggedIn
            };
        default:
            return state;
    }
}
export default usersReducer
