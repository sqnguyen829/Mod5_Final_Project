const initialState = {
    users:[{username:'test'}],
    displayUsers:['steven'],
    loadUsers:false,
    currentManagedUser:null
}

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ALL_USERS':
            return {
                ...state,
                users:action.users,
                displayUsers:action.users,
                loadUsers:true
            }
        case 'UNLOAD_USERS':
            return {
                ...state,
                isProjectLoaded:false
            }
        default:
            return state
    }
}
export default usersReducer
