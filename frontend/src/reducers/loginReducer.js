const initialState = {
    user:null,
    password:null,
    isLoggedIn:false
}

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                users:action.username,
                password:action.password,
                isLoggedIn:!state.isLoggedIn
            }
        case 'LOGOUT':
            return {
                ...state,
                users:null,
                password:null,
                isLoggedIn:!state.isLoggedIn
            }
        default:
            return state
    }
}
export default loginReducer
