import React from 'react';
import NavBar from '../components/NavBar'
import HomeGraph from '../components/HomeGraph'
import {Route, Switch} from 'react-router-dom'
import ProjectContainer from './ProjectContainer'
import TicketContainer from './TicketContainer'
import {useSelector, useDispatch } from 'react-redux'
import {handleProjects, handleUsers ,handleTickets} from '../actions/index'
function AdminContainer(props) {
    const users = useSelector(state => state.users)
    const projects = useSelector(state => state.projects)
    const tickets = useSelector(state => state.tickets)
    const dispatch = useDispatch()
    
    return(
        <div>
            <div>
                <NavBar history={props.history}/>
                <button onClick={ ()=> dispatch(handleUsers) }>fetch user</button>
                <button onClick={ ()=> console.log(users) }>display State users</button>
                <button onCLick={ ()=> dispatch(handleProjects) }>fetch projects</button>
                <button onCLick={ ()=> console.log(projects)}>display state of projects</button>
                <button onCLick={ ()=> dispatch(handleTickets) }>fetch tickets</button>
                <button onCLick={ ()=> console.log(tickets)}>display state of tickets</button>
                <Switch>
                    {/* <Route path="/home/graph" component={HomeGraph}/> */}
                    <Route path="/home/projects" component={ProjectContainer}/>
                    <Route path="/home/tickets" component={TicketContainer}/>
                </Switch>
            </div>
        </div>
    )
}

export default AdminContainer;