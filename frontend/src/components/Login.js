import React from 'react';
import './Login.css'
import {Link} from 'react-router-dom'
import {useDispatch } from 'react-redux'
import {login} from '../actions'

function Login(props) {
    const dispatch = useDispatch()

    return(
        <div className="ui middle aligned center aligned grid">
            <div className="column">
                <form onSubmit={(e)=> {
                    e.preventDefault()
                    login(e.target)
                    props.history.push("/home")
                    }} className="ui large form">
                        
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
                        <button className="ui fluid large blue submit button" type="submit" >Login</button>
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