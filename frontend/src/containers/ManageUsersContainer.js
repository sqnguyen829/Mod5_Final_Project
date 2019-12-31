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
                    <h2>Manage Users Role</h2>
                    <label>User:</label>
                    <div></div>
                    <label>Role:</label>
                    <div></div>
                    <label>Email:</label>
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