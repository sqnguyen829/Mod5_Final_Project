import React from 'react';
import NavBar from '../components/NavBar'
import HomeGraph from '../components/HomeGraph'
import {Route, Switch} from 'react-router-dom'
import ProjectsContainer from './ProjectsContainer'
import TicketContainer from './TicketContainer'
import {useSelector, useDispatch } from 'react-redux'
import {handleProjects, handleUsers ,handleTickets} from '../actions/index'
import AddProjectForm from '../components/AddProjectForm';
import ShowProjectContainer from './ShowProjectContainer'


function AdminContainer(props) {
    // const users = useSelector(state => state.users)
    // const tickets = useSelector(state => state.tickets)
    // const currentShowProject = useSelector(state => state.projects.currentShowProject)
    const projects = useSelector(state => state.projects)
    const dispatch = useDispatch()
    if (!projects.isProjectLoaded){
        dispatch(handleProjects)
    }
    console.log(projects)
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
                    <Route exact path="/home/projects" component={ProjectsContainer}/>
                    <Route path="/home/tickets" component={TicketContainer}/>
                    <Route path="/home/addproject" component={AddProjectForm}/>
                    <Route path='/home/projects/:id' component={ShowProjectContainer}/>
                    {/* <Route exact path={`/home/projects/${projects.currentProject? projects.currentProject.id : ''}`} component={ShowProjectContainer}/> */}
                </Switch>
            </div>
        </div>
    )
}

export default AdminContainer;