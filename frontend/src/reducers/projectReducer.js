const initialState = {
    projects:[{projects:'project 1'}],
    displayProjects:[],
    isProjectLoaded:false,
    currentProject:null
}

const projectsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ALL_PROJECTS':
            return {
                ...state,
                projects:action.projects,
                displayProjects:action.projects,
                isProjectLoaded:true
            }
        case 'ADD_NEW_PROJECT':
            console.log('in reducer')
            debugger
            return {
                ...state,
                projects:[...state.projects, action.newProject],
                displayProjects:[...state.displayProjects, action.newProject]
            }
        default:
            return state
    }
}
export default projectsReducer
