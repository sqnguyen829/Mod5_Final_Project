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
        console.log('fetching user')
        console.log(userData)
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
/////////////////////////////////////////////////Project FN Start//////////////////////////////////////////
export const handleProjectsAsnc = (allProjectData) => {
    return { type: 'ALL_PROJECTS', projects: allProjectData}
}

export const handleProjects = dispatch => {
    fetch(projectsURL , {
        method: "GET",
        headers:{
            Authorization: `Bearer ${localStorage.token}`
        }
    })
    .then(res => res.json())
    .then(allProjectData =>{
        console.log(allProjectData)
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
                    desc:e.target[1].value
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
/////////////////////////////////////////////////Project FN END//////////////////////////////////////////

/////////////////////////////////////////////////Ticket FN Start//////////////////////////////////////////
export const handleTicketsAsnc = (ticketsData) => {
    return { type: 'ALL_TICKETS', tickets: ticketsData}
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
        console.log('fetching ticket')
        console.log(ticketData)
        dispatch(handleUsersAsnc(ticketData))
    })  
}

export const handleNewTicketAsnc = (ticket) => {
    return {type:'ADD_TICKET', ticket}
}

export const handleNewTicket = (e) => {
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
            dispatch(handleNewTicketAsnc(newProject))
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