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
        case 'CHANGE_CURRENT_MANAGE_USER':
            return {
                ...state,
                currentManagedUser:action.user
            }
        case 'CHANGE_ROLE':
                let updatedUsers = state.displayUsers.map(user=>{
                    if(user.id === action.payload.updatedUser.id){
                        return action.payload.updatedUser
                    }
                    return user
                })

            return {
                ...state,
                displayUsers: updatedUsers,

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
