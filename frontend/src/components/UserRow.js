import React from 'react'
import { handleCurrentManageUser } from '../actions'
import { useDispatch } from 'react-redux'
function UserRow(props) {
    const dispatch= useDispatch()
    return(
        <div onClick={()=> dispatch(handleCurrentManageUser(props.user))} className="item">
            <i className="user icon">{props.user.role}</i>
            <div className="left floated content">
                <div className="header">
                    {props.user.firstname} {props.user.lastname}
                </div>
            </div>
        </div>
    )
}

export default UserRow