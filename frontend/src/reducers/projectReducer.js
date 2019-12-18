const initialState = {
    projects:[{projects:'project 1'}],
    displayProjects:[],
    isProjectLoaded:false,
    currentProjectDetail:null
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
            return {
                ...state,
                projects:[...state.projects, action.newProject],
                displayProjects:[...state.displayProjects, action.newProject]
            }
        case 'CURRENT_PROJECT_DETAIL':
            return {
                ...state,
                currentProjectDetail:action.currentProject
            }
        default:
            return state
    }
}
export default projectsReducer
