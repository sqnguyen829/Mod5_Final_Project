import React from 'react';
import NavBar from '../components/NavBar'
import HomeGraph from '../components/HomeGraph'
import {Route, Switch} from 'react-router-dom'
function Home() {
    return(
        <div>
            <NavBar/>
            <Switch>
                <Route path="/home/graph" component={HomeGraph}/>
                {/* <Route/> */}
            </Switch>
        </div>
    )
}

export default Home