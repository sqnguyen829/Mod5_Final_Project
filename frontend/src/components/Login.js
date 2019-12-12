import React from 'react';
import './Login.css'
import {Link} from 'react-router-dom'

function Login() {
    return(
        
        <div className="ui middle aligned center aligned grid">
            <div className="column">
                <form action="https://s.codepen.io/voltron2112/debug/PqrEPM?" method="get" className="ui large form">
                    <div className="ui stacked secondary  segment">
                        <h2 className="ui image header">
                            <div className="content ">
                                CodeProject Management
                            </div>
                        </h2>
                        <div className="field">
                            <div className="ui left icon input">
                                <i className="user icon"></i>
                                <input type="text" name="username" placeholder="Username"></input>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui left icon input">
                                <i className="lock icon"></i>
                                    <input type="password" name="password" placeholder="Password"></input>
                            </div>
                        </div>
                        <div className="ui fluid large blue submit button">Login</div>
                    </div>
                    <div className="ui error message"></div>
                </form>
                <div className="ui message">
                    Join the Team <Link to = {'/signup'}> Sign up </Link> 
                </div>
            </div>
        </div>
    )
}
export default Login