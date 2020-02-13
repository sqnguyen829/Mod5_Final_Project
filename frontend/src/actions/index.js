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
///////////////////////////////////////////////////////// VALIDATION Start////////////////////////////////////////////////////////////////////////////////////
//the idea behind this validation came from here https://www.telerik.com/blogs/up-and-running-with-react-form-validation
//This is a premade regex to validate emails
// const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)

export const handleValidation = (e, validationData) => {
    const { name, value } = e.target
    const validData = validationData
    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
    switch(name) {
        case 'firstname':
            validData.errors.firstname = value.length < 1 ? 'First name must be filled in!' : ''
            validData.firstname = value
            break
        case 'lastname':
            validData.errors.lastname = value.length < 1 ? 'Last name must be filled in!' : ''
            validData.lastname = value
            break
        case 'username':
            validData.errors.username = value.length < 3 ? 'Username must be 3 characters long!' : ''
            validData.username = value
            break
        case 'email':
            validData.errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!'
            validData.email = value
            break
        case 'password':
            validData.errors.password = value.length < 1 ? 'Password needs to be filled in!' : ''
            validData.password = value
            break
        case 'pwconfirm':
            validData.errors.pwconfirm = validData.password !== value? 'Password does not match!' : ''
            validData.pwconfirm = value
            break            
        default:
            break
    }
    return {type: 'VALID_SIGN_UP', validData}
}

export const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    )
    return valid;
}

export const handleNewUser = (e, errors, props) => {
    e.preventDefault()
    if(validateForm(errors)) {
        console.info('Valid Form')
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
        .then(res=>res.json())
        .then(newUserData => {
            console.log(newUserData)
        })
        props.history.push('/login')
        
      }else{
        console.error('Invalid Form')
    }
}

export const handleClearUserValidation = () => {
    let payload = {
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
    }
    return {type:"CLEAR_USER_VALIDATION", payload }
}
///////////////////////////////////////////////////////// VALIDATION End////////////////////////////////////////////////////////////////////////////////////

export const handleCurrentManageUser = (user) => {
    return {type:"CHANGE_CURRENT_MANAGE_USER", user}
}

export const handleUserRoleAsnc = (payload) => {
    return {type:"CHANGE_ROLE", payload}
}

export const handleUserRole = (e,user) =>{
    return dispatch => {
        e.preventDefault()
        fetch(usersURL+`${user.id}`, {
            method:"PATCH",
            headers:{
                'Accept': 'application/json',
                Authorization: `Bearer ${localStorage.token}`,
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                'user':{
                    role:e.target[0].value
                }
            })
        })
        .then(res=>res.json())
        .then(updatedUser=>{
            let payload = {
                updatedUser,
                user
            }
            dispatch(handleUserRoleAsnc(payload))
        })
    }
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
        fetch('http://localhost:3000/api/v1/project_tickets', {
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

export const handleProjectTextSearch = (newSearch) => {
    return {type:'PROJECT_SEARCH', newSearch}
}

export const initiateProjectSearch = (projects) => {
    let searchedProject = projects.projects.filter(project => project.title.includes(projects.projectSearch))
    if(projects.projectCheck !== 'All'){
        searchedProject = projects.filterProjects.filter(project => project.title.includes(projects.projectSearch))
    }
    return {type:'INITIATE_PROJECT_SEARCH', searchedProject}
}

export const handleCheckFilter = (projects, checkType) => {
    let updatedProjects = projects.projects
    if(checkType !== 'All'){
        if(projects.projectSearch !== ''){
            updatedProjects = projects.projects.filter(project => project.status === checkType)
        }
        updatedProjects = updatedProjects.filter(project => project.status === checkType)
    }
    return { type:'CHANGE_PROJECT_CHECK_FILTER', updatedProjects, checkType }
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

export const handleNewTicket = (e,project) => {
    return {type:'ADD_NEW_TICKET', ticket:{
                    user_id:parseInt(localStorage.id),
                    project_id:project.id,
                    title:e.target[0].value,
                    desc:e.target[1].value,
                    status:'Open',
                    type_of_ticket:e.target[2].value,
                    priority:e.target[3].value,
                    project

    }}
}

export const handleRemoveTicket = (ticket) => {
    return {type:'REMOVE_TICKET', ticket}
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

export const showGraph = () => {
    return {type: "SHOW_GRAPH"}
}
export const hideGraph = () => {
    return {type: "HIDE_GRAPH"}
}