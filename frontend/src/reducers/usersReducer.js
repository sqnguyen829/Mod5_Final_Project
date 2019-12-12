const initialState = {
    users:[{username:'test'}],
    displayUsers:['steven'],
    isLoggedIn:false
}

const usersReducer = (state = initialState, action) => {
    console.log(action.type)
    console.log(action.users)
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
