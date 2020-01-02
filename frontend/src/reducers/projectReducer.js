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
                displayProjects:[...state.displayProjects, action.newProject]
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
////////////////////////////////////////////PROJECT_TICKET OPERATING FROM INSIDE PROJECT//////////////////////////////////////////////////////////////////////////////////////////////            
        case 'NEW_PROJECT_TICKET':
            let newProjectTicketList = []
            state.displayProjects.forEach(project=>{
                if(project.id === action.projectId){
                    let projectTicketListUpdated = {...project,project_tickets: [...project.project_tickets, action.newTicket]}
                    newProjectTicketList = [...newProjectTicketList, projectTicketListUpdated]
                }else{
                    newProjectTicketList = [...newProjectTicketList, project]
                }
            })
            let updateTicketList = [...state.currentProjectDetail.project_tickets, action.newTicket]
            return {
                ...state,
                displayProjects:newProjectTicketList,
                currentProjectDetail:{...state.currentProjectDetail, 
                    project_tickets: updateTicketList}
            }
        case 'EDIT_PROJECT_TICKET':
            let EditProjectTicketList = []
            state.displayProjects.forEach(project=>{
                if(project.id === action.payload.projectId){
                    let EditProjectTicketUpdated = {...project,
                        project_tickets: project.project_tickets.map(project_ticket => {
                            if(project_ticket.id === action.payload.updatedTicket.id){
                                return action.payload.updatedTicket
                            }
                            return project_ticket
                        })
                    }
                    EditProjectTicketList = [...EditProjectTicketList, EditProjectTicketUpdated]
                }else{
                    EditProjectTicketList = [...EditProjectTicketList, project]
                }
            })

            let checker = {...state.currentProjectDetail,
                project_tickets: state.currentProjectDetail.project_tickets.map(project_ticket=>{
                    if(project_ticket.id === action.payload.updatedTicket.id){
                        
                        return action.payload.updatedTicket
                    }
                    return project_ticket
                })
            }
            return {
                ...state,
                displayProjects: EditProjectTicketList,
                currentProjectDetail: checker
            }
        case 'REMOVE_PROJECT_TICKET':
            let projectList = state.displayProjects.map( project=>{
                if(project.id === action.projectId){
                    let checking =  {...project,project_tickets: project.project_tickets.filter(project_ticket => project_ticket.id !== action.ticket.id)}
                    return checking
                }else{
                    return {...project}
                }
            })
            return {
                ...state,
                displayProjects: projectList,
                currentProjectDetail:{...state.currentProjectDetail,
                    project_tickets: state.currentProjectDetail.project_tickets.filter(project_ticket => project_ticket.id !== action.ticket.id)
                }
                
            }
        case 'UNLOAD_PROJECTS':
            return {
                ...state,
                isProjectLoaded:false
            }
        default:
            return state
    }
}
export default projectsReducer