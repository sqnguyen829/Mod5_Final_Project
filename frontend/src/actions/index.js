const usersURL = 'http://localhost:3000/api/v1/users/'

export const handleUsers = () =>{
    console.log('inside handleuser')
    fetch(usersURL, {
        method:"GET"
    })
    .then(res => res.json())
    .then(userData =>{
        console.log('fetched')
        console.log(userData)
        return{
            type: "ALL_USER",
            users:userData
        }
    })
}