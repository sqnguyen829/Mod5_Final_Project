import React from 'react'
import { handleUserRole } from '../actions'
import { useDispatch } from 'react-redux'
function UserRow(props) {

    return(
        <div onClick={()=>console.log(props)} className="item">
                    <i className="user icon">{props.user.role}</i>
            <div className="left floated content">
                <div className="header">
                    {props.user.firstname} {props.user.lastname}
                </div>
            </div>
            {/* <div className='left floated content'>{props.user.firstname} {props.user.lastname} <div className='right floated content'>{props.user.firstname} {props.user.lastname}</div></div> */}
        </div>
    )
}

export default UserRow