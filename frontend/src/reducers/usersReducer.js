const initialState = {
    users:[{username:'test'}],
    displayUsers:['steven'],
    isLoggedIn:false
}

const usersReducer = (state = initialState, action) => {
    console.log('this is my action', action)
    switch(action.type){
        case 'ALL_USERS':
            return {
                ...state,
                users:action.users,
                displayUsers:action.users,
                isLoggedIn:!state.isLoggedIn
            }
        default:
            return state
    }
}
export default usersReducer
