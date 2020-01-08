import React from 'react';
import AdminContainer from './AdminContainer'
import HomeGraph from '../components/HomeGraph'
import ManagerContainer from './ManagerContainer';
import DeveloperContainer from './DeveloperContainer';
import SubmitterContainer from './SubmitterContainer';
import { useSelector } from 'react-redux'

function Home(props) {
    const checkGraph = useSelector( state=> state.graphs)
    return(
        <div>
            {localStorage.token?
                <div>
                    {currentUserLogged(props)}
                    {checkGraph.displayGraph? <HomeGraph/> : ''}
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
            console.log('manager')
            return <AdminContainer history={props.history}/>
        case "developer":
                return <DeveloperContainer history={props.history}/>
        case "submitter":
                return <SubmitterContainer history={props.history}/>
        case "N/A":
                return <SubmitterContainer history={props.history}/>
        default:
            return null;
    }
}

export default Home