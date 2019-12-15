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

export const login = (obj) => {
    // e.preventDefault()
    console.log(obj[0].value)
    console.log(obj[1].value)
    // debugger
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
            console.log('current user is in')
            // this.props.history.push('/home')
        }
    })
}

// login = (e) => {
//     e.preventDefault()
//     fetch("http://localhost:3000/api/v1/login",{
//         method: 'POST',
//         headers:{
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//                 username: this.state.username,
//                 password: this.state.password
//       })
//     })
//     .then(res=> res.json())
//     .then(userInfo => {
//         localStorage.username = userInfo.username
//         localStorage.point= userInfo.point
//         localStorage.id=userInfo.id
//         localStorage.token = userInfo.token
//         if(userInfo.token){
//             this.props.history.push('/flatironrental/cars')
//         }
//     })
// }


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