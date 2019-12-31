import React from 'react';

function NavBar(props) {
    return(
        <div className="ui inverted menu">
            <div className="header item" onClick={()=> props.history.push("/home")}>Home</div>
            <div onClick={()=> props.history.push("/home/projects")} className="item">Projects</div>
            <div onClick={()=> props.history.push("/home/tickets")} className="item">Tickets</div>
            <div onClick={()=> props.history.push("/home/manage_users")}className="item">Manage Users</div>
                <div className="ui dropdown item" tabIndex="0">
                Dropdown
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
                        props.history.push("/login")
                    }
                    }>Logout</div>
            </div>
        </div>
    )
}

export default NavBar