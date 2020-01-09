import React from 'react';
import {unloadProjects, unloadTickets, unloadUsers, showGraph, hideGraph} from '../actions'
import {useDispatch} from 'react-redux'
function NavBar(props) {
    const dispatch = useDispatch()
    return(
        <div className="ui inverted menu">
            <div className="header item" onClick={()=> {props.history.push("/home")
                                                        dispatch(showGraph())}}>Home</div>
            <div onClick={()=> {props.history.push("/home/projects")
                                dispatch(hideGraph())}} className="item">Projects</div>
            <div onClick={()=> {props.history.push("/home/tickets")
                                dispatch(hideGraph())}} className="item">Tickets</div>
            {(localStorage.role==="admin"||localStorage.role==="manager")? <div onClick={()=> {props.history.push("/home/manage_users")
                                                                                                dispatch(hideGraph())}}className="item">Manage Users</div> : ''}
                <div className="ui dropdown item" tabIndex="0">
                Hello {localStorage.firstname} ! 
                <i className="dropdown icon"></i>
                <div className="menu transition hidden" tabIndex="-1">
                    <div className="item">Action</div>
                    <div className="item">Another Action</div>
                    <div className="item">Something else here</div>
                    <div className="divider"></div>
                    <div className="item">Separated Link</div>
                    <div className="divider"></div>
                    <div className="item">One more separated link</div>
                </div>
            </div>
            <div className='ui black label'>
                    User Role: {localStorage.role}
            </div>
            <div className="right menu">
                <div className="item">
                    <div className="ui transparent inverted icon input">
                        <i className="search icon"></i>
                        <input type="text" placeholder="Search"></input>
                    </div>
                </div>
                <div className="item" onClick={()=>
                    {
                        localStorage.clear()
                        dispatch(unloadProjects())
                        dispatch(unloadTickets())
                        dispatch(unloadUsers())
                        dispatch(showGraph())
                        props.history.push("/login")
                    }
                    }>Logout</div>
            </div>
        </div>
    )
}

export default NavBar