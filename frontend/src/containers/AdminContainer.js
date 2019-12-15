import React from 'react';
import NavBar from '../components/NavBar'
import HomeGraph from '../components/HomeGraph'
import {Route, Switch} from 'react-router-dom'
import ProjectContainer from './ProjectContainer'
import TicketContainer from './TicketContainer'
function AdminContainer(props) {
    return(
        <div>
            <div>
                <NavBar history={props.history}/>
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