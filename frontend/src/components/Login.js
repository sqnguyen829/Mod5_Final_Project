import React from 'react';
import './Login.css'
// import {useSelector, useDispatch} from 'react-redux'
// import {} from './actions'

function Login() {
    // const counter = useSelector(state => state.counter)
    
    console.log('hello')
    return(
        
        <div class="ui middle aligned center aligned grid">
            <div class="column">
                <form action="https://s.codepen.io/voltron2112/debug/PqrEPM?" method="get" class="ui large form">
                    <div class="ui stacked secondary  segment">
                        <h2 class="ui image header">
                            <div class="content ">
                                CodeProject Management
                            </div>
                        </h2>
                        <div class="field">
                            <div class="ui left icon input">
                                <i class="user icon"></i>
                                <input type="text" name="username" placeholder="Username"></input>
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui left icon input">
                                <i class="lock icon"></i>
                                    <input type="password" name="password" placeholder="Password"></input>
                            </div>
                        </div>
                        <div class="ui fluid large blue submit button">Login</div>
                    </div>
                    <div class="ui error message"></div>
                </form>
                <div class="ui message">
                    <a href="https://s.codepen.io/voltron2112/debug/PqrEPM?"> Sign up</a>
                </div>
            </div>
        </div>
    )
}
export default Login