import React from 'react'
import {Link} from 'react-router-dom'
import { handleNewUser, handleValidation } from '../actions'
import { useSelector, useDispatch } from 'react-redux'

function Signup(props) {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    return(
        <div className="ui inverted segment">
            <div className="ui inverted form">
                <form className="ui form" onSubmit={(e)=> {handleNewUser(e, users.signUpValidation.errors, props)}}>
                    <div className="ui equal width form">
                        <div className="fields">
                            <div className="field">
                                <label>First Name</label>
                                <input placeholder="First Name" name='firstname' type="text" onChange={(e) => dispatch(handleValidation(e, users.signUpValidation))}></input>
                                {users.signUpValidation.errors.firstname.length > 0 && <span className='error'>{users.signUpValidation.errors.firstname}</span>}
                            </div>
                            <div className="field">
                                <label>Last Name</label>
                                <input placeholder="Last Name" name='lastname' type="text" onChange={(e) => dispatch(handleValidation(e, users.signUpValidation))}></input>
                                {users.signUpValidation.errors.lastname.length > 0 && <span className='error'>{users.signUpValidation.errors.lastname}</span>}
                            </div>
                        </div>
                        <div className="fields">
                            <div className="field">
                                <label>Username</label>
                                <input placeholder="Username" name='username' type="text" onChange={(e) => dispatch(handleValidation(e, users.signUpValidation))}></input>
                                {users.signUpValidation.errors.username.length > 0 && <span className='error'>{users.signUpValidation.errors.username}</span>}
                            </div>
                            <div className="field">
                                <label>Email</label>
                                <input placeholder="Email" name='email' type="text" onChange={(e) => dispatch(handleValidation(e, users.signUpValidation))}></input>
                                {users.signUpValidation.errors.email.length > 0 && <span className='error'>{users.signUpValidation.errors.email}</span>}
                            </div>
                        </div>
                        <div className="fields">
                            <div className="field">
                                <label>Password</label>
                                <input placeholder="Password" name='password' type="password" onChange={(e) => dispatch(handleValidation(e, users.signUpValidation))}></input>
                                {users.signUpValidation.errors.password.length > 0 && <span className='error'>{users.signUpValidation.errors.password}</span>}
                            </div>
                            <div className="field">
                                <label>Confirm Password</label>
                                <input placeholder="Confirm Password" name='pwconfirm' type="password" onChange={(e) => dispatch(handleValidation(e, users.signUpValidation))}></input>
                                {users.signUpValidation.errors.pwconfirm.length > 0 && <span className='error'>{users.signUpValidation.errors.pwconfirm}</span>}
                            </div>
                        </div>
                    </div>
                    <button className="ui grey button" type="submit"  >Submit</button>
                    <Link to = {'/login'}>
                        <button className="ui grey button" type="login"  >Back to login</button>
                    </Link> 
                    {localStorage? <span style={{ float: 'right'}}>{localStorage.errorMsg}</span>: ''}
                </form>
            </div>
        </div>
    )
}
export default Signup