import React from 'react';

function NavBar() {
    return(
        <div className="ui inverted menu">
            <div className="header item">Brand</div>
            <div className="item">Link</div>
            <div className="item">Link</div>
            <div className="item">Link</div>
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
                <a className="item">Link</a>
            </div>
        </div>
    )
}

export default NavBar