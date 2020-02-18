import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import UserRow from '../components/UserRow'
import { handleUserRole } from '../actions'
import UserGraph from '../components/UserGraph'
function ManageUsersContainer(props) {
    const users = useSelector(state=> state.users)
    const dispatch = useDispatch()
    return(
        <div className="ui grid container">
        <div className="ui grid">
            <div className="column row">
                <div className="ui raised very padded text container segment">
                    {users.currentManagedUser?
                    <div>
                        <form onSubmit = {(e)=> dispatch(handleUserRole(e, users.currentManagedUser))}>
                        <h2>Manage Users Role</h2>
                        <label>User: {users.currentManagedUser.firstname} {users.currentManagedUser.lastname}</label>
                        <div></div>
                        <label>Username: {users.currentManagedUser.username}</label>
                        <div></div>
                        <label>Email: {users.currentManagedUser.email}</label>
                        <div></div>
                        {
                            users.currentManagedUser.role==='admin'? '' 
                            :
                            <div className="big ui label">Role</div>
                        }
                        {users.currentManagedUser.role==='admin'? '' : 
                            <select onChange={(e, defaultValue)=> defaultValue=e.target.value} defaultValue = 'N/A' className="mini ui dropdown">
                                {/* <option value="admin">admin</option> */}
                                <option value="manager">manager</option>
                                <option value="developer">developer</option>
                                <option value="submitter">submitter</option>
                                <option value="N/A">N/A</option>
                            </select>
                        }
                        <div></div>
                        {users.currentManagedUser.role==='admin'? ''
                        :
                        <button className="mini ui blue button" type='submit' > Confirm Change</button>
                        }
                        </form>
                    </div>
                    :
                    <div>
                        <h2>Choose a user to adjust their Role.</h2>
                    </div>
                    }
                </div>
            </div>
            <div className="three wide column">
                <div className="ui card" style={{overflow:"scroll",height:'20em'}}>
                    <div className="ui middle aligned animated list">
                        {users.loadUsers? users.displayUsers.map(user => <UserRow user={user} key={user.id}/>) : ''}
                    </div>
                </div>
            </div>
        </div>
            <div className = "sixteen wide column centered row">
                <UserGraph/>
            </div>
        </div>
    )
}
export default ManageUsersContainer;