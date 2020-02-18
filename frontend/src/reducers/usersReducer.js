const initialState = {
    users:[{username:'test'}],
    displayUsers:['steven'],
    loadUsers:false,
    currentManagedUser:null,
    signUpValidation:{
        firstname:null,
        lastname:null,
        username:null,
        email:null,
        password:null,
        pwconfirm:null,
        errors:{
            firstname:'',
            lastname:'',
            username:'',
            email:'',
            password:'',
            pwconfirm:'',
        }
    },
    loginCheck:false,
    clearValidation:false
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
        case 'VALID_SIGN_UP':
            return {
                ...state,
                signUpValidation:action.validData,
                clearValidation:true
            }
        case 'CLEAR_USER_VALIDATION':
            return {
                ...state,
                signUpValidation:action.payload,
                clearValidation:false
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
                displayUsers: updatedUsers
            }
        case 'UNLOAD_USERS':
            return {
                ...state,
                loadUsers:false
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                loginCheck:action.check
            }
        default:
            return state
    }
}
export default usersReducer
