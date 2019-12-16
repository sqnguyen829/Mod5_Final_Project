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
        case 'ADD_PROJECT':
            return console.log('adding')
        default:
            return state
    }
}
export default projectsReducer
