import React from 'react';
import NavBar from '../components/NavBar'
import HomeGraph from '../components/HomeGraph'
import {Route, Switch} from 'react-router-dom'
import ProjectContainer from './ProjectContainer'
import TicketContainer from './TicketContainer'
import {useSelector, useDispatch } from 'react-redux'
import {handleProjects, handleUsers ,handleTickets} from '../actions/index'
import AddProjectForm from '../components/AddProjectForm';


function AdminContainer(props) {
    // const users = useSelector(state => state.users)
    // const tickets = useSelector(state => state.tickets)
    const projects = useSelector(state => state.projects)
    const dispatch = useDispatch()
    if (!projects.isProjectLoaded){
        dispatch(handleProjects)
    }

    return(
        <div>
            <div>
                <NavBar history={props.history}/>
                {/* <div>
                    <button onClick={ ()=> dispatch(handleUsers) }>fetch user</button>
                    <button onClick={ ()=> console.log(users) }>display State users</button>
                    <div></div>
                    <button onClick={ ()=> dispatch(handleProjects) }>fetch projects</button>
                    <button onClick={ ()=> console.log(projects)}>display state of projects</button>
                    <div></div>
                    <button onClick={ ()=> dispatch(handleTickets) }>fetch tickets</button>
                    <button onClick={ ()=> console.log(tickets)}>display state of tickets</button>
                </div> */}
                <Switch>
                    {/* <Route path="/home/graph" component={HomeGraph}/> */}
                    <Route path="/home/projects" component={ProjectContainer}/>
                    <Route path="/home/tickets" component={TicketContainer}/>
                    <Route path="/home/addproject" component={AddProjectForm}/>
                </Switch>
            </div>
        </div>
    )
}

export default AdminContainer;