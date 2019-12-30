import React from 'react';
import AdminContainer from './AdminContainer'
import HomeGraph from '../components/HomeGraph'

function Home(props) {
    return(
        <div>
            {localStorage.token?
                <div>
                    {currentUserLogged(props)}
                    <h1>Home Page</h1>
                    <HomeGraph/>
                </div>
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