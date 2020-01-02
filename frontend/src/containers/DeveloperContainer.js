import React from 'react';
import NavBar from '../components/NavBar'
import {Route, Switch} from 'react-router-dom'
import ProjectsContainer from './ProjectsContainer'
import TicketContainer from './TicketContainer'
import {useSelector, useDispatch } from 'react-redux'
import {handleProjects, handleUsers ,handleTickets} from '../actions/index'
import AddProjectForm from '../components/AddProjectForm';
import ShowProjectContainer from './ShowProjectContainer'
import ManageUsersContainer from './ManageUsersContainer'


function DeveloperContainer(props) {
    const projects = useSelector(state => state.projects)
    const dispatch = useDispatch()
    if (!projects.isProjectLoaded){
        dispatch(handleProjects)
        dispatch(handleTickets)
        dispatch(handleUsers)
    }
    return(
        <div>
            <NavBar history={props.history}/>
            <Switch>
                <Route exact path="/home/projects" component={ProjectsContainer}/>
                <Route path="/home/tickets" component={TicketContainer}/>
                <Route path='/home/projects/:id' component={ShowProjectContainer}/>
            </Switch>
        </div>
    )
}

export default DeveloperContainer;