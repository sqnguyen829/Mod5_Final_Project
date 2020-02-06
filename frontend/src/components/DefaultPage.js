import React from 'react';
import {Link} from 'react-router-dom'

function DefaultPage() {
    return(
        <div>
            Default page on app start up
            <Link to = {'/login'}>
                        <button className="ui grey button" type="login"  > Head to the Login</button>
            </Link> 
        </div>
    )
}
export default DefaultPage