const initialState = {
    projects:[{projects:'project 1'}],
    displayProjects:[],
    currentProject:null
}

const projectsReducer = (state = initialState, action) => {
    console.log('this is my action for projects', action)
    switch(action.type){
        case 'ALL_PROJECTS':
            return {
                ...state,
                projects:action.projects,
                displayProjects:action.projects
            }
        case 'ADD_PROJECT':
            return console.log('adding')
        default:
            return state
    }
}
export default projectsReducer
