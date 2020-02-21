import React from 'react';
import {Link} from 'react-router-dom'

function DefaultPage() {
    return(
        <div class="ui header basic center aligned">
            <h1>Welcome to the Project Management App</h1>
            <div class="ui inverted raised very padded text container segment">
                <h4 class="ui horizontal inverted divider">
                    App Description
                </h4>
                <div class="ui inverted segment">
                    <p>
                        The purpose of this app is to allow management of projects to be handled on large scale. 
                        It is a way to origanize the issues and goals through ticket, so that a project can be completed 
                        timely manner. Projects will have multiple tickets that would need a solution, to be completed. 
                        This app was built using Ruby on Rails, SQL, React and Redux.
                    </p>
                </div>
                <div class="ui inverted horizontal divider">Current app capabilities</div>
                <p>
                    The app currently has mulitple user roles, these roles are: admin, manager, developer, submitter and N/A. 
                    When you first sign up the user will default to N/A. This user type can only view the app and nothing 
                    else until they are assigned a new role by the manager or admin. Submitters and Developers are roles that 
                    could do everything the last role could do as well as manage tickets. Manager and Admin roles can do everything 
                    the last roles can do as well manage projects and assigning users their roles. The current functions for the app: 
                </p>
                <li style={{ float: 'left'}}>Sign up page has verification to validate user inputs</li>
                <li style={{ float: 'left'}}>Login Page is authenticate the username and password</li>
                <li style={{ float: 'left'}}>Projects can be create/edit/delete</li>
                <li style={{ float: 'left'}}>Searching by project name and filtering by project status</li>
                <li style={{ float: 'left'}}>Tickets can be create/edit/delete</li>
                <li style={{ float: 'left'}}>Admin and managers can change other user roles</li>
                <li style={{ float: 'left'}}>Graphs showing statistic values of projects, tickets and user roles</li>
                <div class="ui inverted horizontal divider">
                    To Continue with the app please head to the login page
                </div>
                {localStorage.token? 
                    <div>
                        <label>Currently logged in</label>
                        <Link to = {'/home'}>
                            <button className="ui grey button" type="home"  > Home page</button>
                        </Link> 
                    </div>
                :
                    <Link to = {'/login'}>
                        <button className="ui grey button" type="login"  > Login</button>
                    </Link> 
                }
                <h4 class="ui inverted">Created by Steven Nguyen</h4>
            </div>
        </div>
    )
}
export default DefaultPage
