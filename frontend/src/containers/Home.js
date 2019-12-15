import React from 'react';
import NavBar from '../components/NavBar'
import HomeGraph from '../components/HomeGraph'
import {Route, Switch} from 'react-router-dom'
function Home(props) {
    return(
        <div>
            {localStorage.token?
                // localStorage.role==='Admin'?
                    <div>
                        <NavBar history={props.history}/>
                        <Switch>
                            <Route path="/home/graph" component={HomeGraph}/>
                            <Route/>
                        </Switch>
                    </div>
                    // :
                    // ''
                :
                <div>
                    <h1>Go log in</h1>
                    <button onClick={()=>props.history.push("/login") }>Go Back to Login</button>
                </div>
            }
        </div>
    )
}

export default Home