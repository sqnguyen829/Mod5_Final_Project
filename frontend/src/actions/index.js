const usersURL = 'http://localhost:3000/api/v1/users/'
const projectsURL = 'http://localhost:3000/api/v1/projects/'
const ticketsURL = 'http://localhost:3000/api/v1/project_tickets/'

//sends type back to call the right reducer
export const handleUsersAsnc = (userData) => {
    return { type: 'ALL_USERS', users: userData}
}
//fetching all users in the DB and send t the handleUserAsnc fn to find the right reducer
export const handleUsers = dispatch => {
    console.log('attempting fetch user')
    fetch(usersURL, {
        method:"GET",
        headers:{
            Authorization: `Bearer ${localStorage.token}`
        }
    })
    .then(res => res.json())
    .then(userData =>{
        dispatch(handleUsersAsnc(userData))
    })  
}

export const handleNewUser = (e) => {
    e.preventDefault()
    fetch(usersURL, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "user": {
                username:e.target[2].value,
                email:e.target[3].value,
                password:e.target[4].value,
                role:'N/A',
                firstname:e.target[0].value,
                lastname:e.target[1].value,
            }
        })
    })
}

export const handleUserRole = () =>{

}

/////////////////////////////////////////////////Project FN Start//////////////////////////////////////////
export const handleProjectsAsnc = (allProjectData) => {
    return { type: 'ALL_PROJECTS', projects: allProjectData}
}

export const handleProjects = dispatch => {
    console.log('attempting fetch project')
    fetch(projectsURL , {
        method: "GET",
        headers:{
            Authorization: `Bearer ${localStorage.token}`
        }
    })
    .then(res => res.json())
    .then(allProjectData =>{
        dispatch(handleProjectsAsnc(allProjectData))
    })
}

export const handleNewProjectAsnc = (newProject) => {
    return {type:'ADD_NEW_PROJECT', newProject}
}

export const handleNewProject = (e) => {
    return dispatch => {
        e.preventDefault()
        fetch(projectsURL, {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                Authorization: `Bearer ${localStorage.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "project": {
                    user_id:localStorage.id,
                    title:e.target[0].value,
                    desc:e.target[1].value,
                    status:'Open'
                }
            })
        })
        .then(res=>res.json())
        .then(newProject => {
            dispatch(handleNewProjectAsnc(newProject))
        })
    }
}

export const handleEditProjectAsnc = (payload) => {
    return {type:'EDIT_PROJECT', payload}
}

export const handleEditProject = (e,project,projects) => {
    return dispatch => {
        e.preventDefault()
        fetch(`http://localhost:3000/api/v1/projects/${project.id}`, {
            method:'PATCH',
            headers:{
                'Accept': 'application/json',
                Authorization: `Bearer ${localStorage.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'project':{
                    title:e.target[0].value,
                    desc:e.target[1].value,
                    status:e.target[2].value
                }
            })
        })
        .then(res=>res.json())
        .then(updatedProject => {
            let updatedProjects = projects.map(project =>{
                if(project.id === updatedProject.id){
                    return updatedProject
                }
                return project
            })
            let payload = {
                updatedProjects,
                updatedProject
            }
            dispatch(handleEditProjectAsnc(payload))
        })
    }
}

export const handleShowProject = (currentProject) => {
    return {type:'CURRENT_PROJECT_DETAIL', currentProject}
}

export const handleRemoveProject = (project) => {
    return {type:'REMOVE_PROJECT', project}
}

export const removeProject = (project) => {
    return dispatch => {
        fetch(`http://localhost:3000/api/v1/projects/${project.id}`,{
            method:"DELETE",
            headers:{
                Authorization: `Bearer ${localStorage.token}`
            }
        },
            dispatch(handleRemoveProject(project))
        )
    }
}

export const handleNewProjectTicketAsnc = (newTicket, projectId) => {
    return {type:'NEW_PROJECT_TICKET', newTicket , projectId}
}

export const handleNewProjectTicket = (e,project) => {
    return dispatch =>{
        e.preventDefault()
        fetch('http://localhost:3000/api/v1/project_tickets',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                Authorization: `Bearer ${localStorage.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'project_ticket':{
                    user_id:parseInt(localStorage.id),
                    project_id:project.id,
                    title:e.target[0].value,
                    desc:e.target[1].value,
                    status:'Open',
                    type_of_ticket:e.target[2].value,
                    priority:e.target[3].value
                }
            })
        })
        .then(res=>res.json())
        .then(newTicket=>{
            dispatch(handleNewProjectTicketAsnc(newTicket,project.id))
        })
    }
}

export const handleEditProjectTicketAsnc = (payload) => {
    return {type:'EDIT_PROJECT_TICKET', payload}
}

export const handleEditProjectTicket = (e,project,ticket) => {
    return dispatch => {
        e.preventDefault()
        fetch(`http://localhost:3000/api/v1/project_tickets/${ticket.id}`, {
            method:'PATCH',
            headers:{
                'Accept': 'application/json',
                Authorization: `Bearer ${localStorage.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                project_ticket:{
                    title:e.target[0].value,
                    desc:e.target[1].value,
                    status:e.target[2].value,
                    type_of_ticket:e.target[3].value,
                    priority:e.target[4].value
                }
            })
        })
        .then(res=>res.json())
        .then(updatedTicket=>{
            let updatedProjectTickets = project.project_tickets.map(project_ticket =>{
                if(project_ticket.id === updatedTicket.id){
                    return updatedTicket
                }
                return project_ticket
            })
            let payload = {
                projectId:project.id,
                updatedProjectTickets,
                updatedTicket
            }
            dispatch(handleEditProjectTicketAsnc(payload))
        })
    }
}

export const handleRemoveProjectTicketAsnc = (ticket, projectId) => {
    return {type:'REMOVE_PROJECT_TICKET', ticket, projectId}
}

export const handleRemoveProjectTicket = (ticket,project) => {
    return dispatch => {
        fetch(`http://localhost:3000/api/v1/project_tickets/${ticket.id}`,{
            method:"DELETE",
            headers:{
                Authorization: `Bearer ${localStorage.token}`
            }
        },
            dispatch(handleRemoveProjectTicketAsnc(ticket,project.id))
        )
    }
}

/////////////////////////////////////////////////Project FN END//////////////////////////////////////////

/////////////////////////////////////////////////Ticket FN Start//////////////////////////////////////////
export const handleTicketsAsnc = (ticketsData) => {
    return { type: 'ALL_TICKETS', ticketsData}
}

export const handleTickets = dispatch => {
    console.log('attempting fetch ticket')
    fetch(ticketsURL, {
        method:"GET",
        headers:{
            Authorization: `Bearer ${localStorage.token}`
        }
    })
    .then(res => res.json())
    .then(ticketData =>{
        dispatch(handleTicketsAsnc(ticketData))
    })  
}

export const handleNewTicketAsnc = (ticket) => {
    return {type:'NEW_PROJECT_TICKET', ticket}
}

export const handleNewTicket = (e,project) => {
    return dispatch => {
        e.preventDefault()
        fetch(ticketsURL, {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                Authorization: `Bearer ${localStorage.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "project_ticket": {
                    user_id:localStorage.id,
                    title:e.target[0].value,
                    desc:e.target[1].value,
                    status:e.target[2].value,
                    priority:e.target[3].value,
                    type_of_ticket:e.target[4].value
                }
            })
        })
        .then(res=>res.json())
        .then(newProject => {
            dispatch(handleNewTicket(newProject))
        })
    }
}

/////////////////////////////////////////////////Ticket FN END//////////////////////////////////////////

export const login = (obj,history) => {
    fetch("http://localhost:3000/api/v1/login", {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                username: obj[0].value,
                password: obj[1].value
      })
    })
    .then(res=>res.json())
    .then(userInfo=> {
        localStorage.username = userInfo.username
        localStorage.id=userInfo.id
        localStorage.firstname=userInfo.firstname
        localStorage.lastname=userInfo.lastname
        localStorage.email=userInfo.email
        localStorage.role = userInfo.role
        localStorage.token = userInfo.token
        if(userInfo.token){
            history.push('/home')
        }
    })
}

export const unloadProjects = () =>{
    return {type:"UNLOAD_PROJECTS"}
}
export const unloadUsers = () =>{
    return {type:"UNLOAD_USERS"}
}
export const unloadTickets = () =>{
    return {type:"UNLOAD_TICKETS"}
}