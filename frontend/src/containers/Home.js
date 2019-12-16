import React from 'react';
// import NavBar from '../components/NavBar'
// import HomeGraph from '../components/HomeGraph'
// import {Route, Switch} from 'react-router-dom'
import AdminContainer from './AdminContainer'
// import {useSelector, useDispatch } from 'react-redux'
// import {handleProjects, handleUsers ,handleTickets} from '../actions/index'

function Home(props) {
    console.log(localStorage.token)
    return(
        <div>
            {localStorage.token?
                currentUserLogged(props)
                :
                <div>
                    <h1>Go log in</h1>
                    <button onClick={()=>props.history.push("/login") }>Go Back to Login</button>
                </div>
            }
        </div>
    )
}
//after checking to localstorage token, this fn will look for the type 
//of user role and render the corresponding user container
function currentUserLogged (props){
    let userType = localStorage.role
    switch(userType){
        case "admin":
            return <AdminContainer history={props.history}/>
        case "manager":
            return <h1>Manager switch</h1>
        case "developer":
                return <h1>Developer switch</h1>
        case "submitter" || "N/A":
                return <h1>Submitter switch</h1>
        default:
            return null;
    }
}

export default Home