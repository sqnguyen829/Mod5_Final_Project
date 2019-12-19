const initialState = {
    projects:[{projects:'project 1'}],
    displayProjects:[],
    isProjectLoaded:false,
    currentProjectDetail:{
        user_id: 1,
        title: 'Testing',
        desc: 'Default msg for testing',
        user: {
            firstname:'first',
            lastname:'last'
        },
        status: 'Open'
    }
}
// t.integer :user_id
//       t.string :title
//       t.string :desc
//       t.string :status
const projectsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ALL_PROJECTS':
            return {
                ...state,
                projects:action.projects,
                displayProjects:action.projects,
                isProjectLoaded:true,
                currentProjectDetail:action.projects[0]
            }
        case 'ADD_NEW_PROJECT':
            return {
                ...state,
                projects:[...state.projects, action.newProject],
                displayProjects:[...state.displayProjects, action.newProject],
                currentProjectDetail:state.currentProjectDetail
            }
        case 'CURRENT_PROJECT_DETAIL':
            return {
                ...state,
                currentProjectDetail:action.currentProject
            }
        case 'REMOVE_PROJECT':
            return {
                ...state,
                projects:state.projects.filter(project => project.id !== action.project.id),
                displayProjects:state.displayProjects.filter(project => project.id !== action.project.id)
            }
        case 'EDIT_PROJECT':
            return {
                ...state,
                displayProjects:action.payload.updatedProjects,
                currentProjectDetail:action.payload.updatedProject
            }
        default:
            return state
    }
}
export default projectsReducer
// let updatedNotes = this.state.notes.map(note => {
//     if(note.id === newNote.id){
//       return newNote
//     }
//     return note
//   })

//   this.setState({
//     notes: updatedNotes,
//     selectNote: newNote
//   })
// })
// }