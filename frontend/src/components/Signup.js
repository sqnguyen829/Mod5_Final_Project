import React from 'react'
import {Link} from 'react-router-dom'
import { handleNewUser } from '../actions'

function Signup() {
    return(
        <div className="ui inverted segment">
            <div className="ui inverted form">
                <form className="ui form" onSubmit={(e)=> handleNewUser(e)}>
                    <div className="ui equal width form">
                        <div className="fields">
                            <div className="field">
                                <label>First Name</label>
                                <input placeholder="First Name" name='firstname' type="text"></input>
                            </div>
                            <div className="field">
                                <label>Last Name</label>
                                <input placeholder="Last Name" name='lastname' type="text"></input>
                            </div>
                        </div>
                        <div className="fields">
                            <div className="field">
                                <label>Username</label>
                                <input placeholder="Username" name='username' type="text"></input>
                            </div>
                            <div className="field">
                                <label>Email</label>
                                <input placeholder="Email" name='email' type="text"></input>
                            </div>
                        </div>
                        <div className="fields">
                            <div className="field">
                                <label>Password</label>
                                <input placeholder="Password" name='password' type="password"></input>
                            </div>
                            <div className="field">
                                <label>Confirm Password</label>
                                <input placeholder="Confirm Password" name='pwconfirm' type="password"></input>
                            </div>
                        </div>
                    </div>
                    <button className="ui grey button" type="submit"  >Submit</button>
                    <Link to = {'/login'}>
                        <button className="ui grey button" type="login"  >Back to login</button>
                    </Link> 
                </form>
            </div>
        </div>
    )
}
export default Signup