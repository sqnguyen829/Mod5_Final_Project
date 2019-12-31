import React from 'react';
import {useSelector} from 'react-redux'
import UserRow from '../components/UserRow'
// import { handleUsers } from '../actions/index'
function ManageUsersContainer(props) {
    const users = useSelector(state=> state.users)
    return(
        <div className="ui grid">
            <div className="one column row">
                <div className="ui raised very padded text container segment">
                    {users.currentManagedUser?
                    <div>
                        <form onSubmit = {()=> console.log('changing role')}>
                        <h2>Manage Users Role</h2>
                        <label>User: {users.currentManagedUser.firstname}</label>
                        <div></div>
                        <label>Email: {users.currentManagedUser.email}</label>
                        <div></div>
                        <div className="big ui label">
                          Role
                        </div>
                        <select onChange={(e, defaultValue)=> defaultValue=e.target.value} defaultValue = 'N/A' className="mini ui dropdown">
                            <option value="admin">admin</option>
                            <option value="manager">manager</option>
                            <option value="developer">developer</option>
                            <option value="submitter">submitter</option>
                            <option value="N/A">N/A</option>
                        </select>
                        <div></div>
                        <button className="mini ui blue button" type='submit' > Confirm Change</button>
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
                <div className="ui card">
                    <div className="ui middle aligned animated list">
                        {users.loadUsers? users.displayUsers.map(user => <UserRow user={user} key={user.id}/>) : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ManageUsersContainer;