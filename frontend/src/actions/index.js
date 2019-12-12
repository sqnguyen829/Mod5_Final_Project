const usersURL = 'http://localhost:3000/api/v1/users/'

export const handleUsers = () =>{
    fetch(usersURL, {
        method:"GET"
    })
    .then(res => res.json())
    .then(userData =>{
        console.log(userData)
        return{
            type: "ALL_USER",
            users:userData
        }
    })
}