const usersURL = 'http://localhost:3000/api/v1/users/'
const projectsURL = 'http://localhost:3000/api/v1/projects/'
export const handleUsersAsnc = (userData) => {
    return { type: 'ALL_USERS', users: userData}
}

export const handleUsers =  dispatch => {
    fetch(usersURL, {
        method:"GET"
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
    }, )
}


// export const handleProjectsAsnc = (data) => {
//     return { type: 'ALL_PROJECTS', projects: data}
// }

// export const handleProjects = () =>{
//     return dispatch => {
//         fetch(usersURL, {
//             method:"GET"
//         })
//         .then(res => res.json())
//         .then(projectData =>{
//             dispatch(handleProjectsAsnc(projectData))
//         })
//     }
// }

// export const testing = () => {
//     // return dispatch(console.log('testing'))
//     return {type: 'TESTING'}
// }