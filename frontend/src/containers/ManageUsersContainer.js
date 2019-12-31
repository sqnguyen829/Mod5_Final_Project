import React from 'react';

function ManageUsersContainer(props) {
    
    // if (!projects.isProjectLoaded){
    //     dispatch(handleProjects)
    //     dispatch(handleTickets)
    // }
    return(
        <div class="ui grid">
            <div class="one column row">
                <div className="ui raised very padded text container segment"></div>
            </div>
            <div class="five wide column">
                <div class="ui card">
                    <div class="ui middle aligned animated list">
                        <div class="item">
                            <i class="user icon"></i>
                            <div class="content">
                                <div class="header">Helen</div>
                            </div>
                        </div>
                    <div class="item">
                    <i class="user icon"></i>
                    <div class="content">
                    <div class="header">Christian</div>
                    </div>
                </div>
                <div class="item">
                    <i class="user icon"></i>
                    <div class="content">
                    <div class="header">Daniel</div>
                    </div>
                </div>
                <div class="item">
                    <i class="user icon"></i>
                    <div class="content">
                    <div class="header">Daniel</div>
                    </div>
                </div>
                <div class="item">
                    <i class="user icon"></i>
                    <div class="content">
                    <div class="header">Daniel</div>
                    </div>
                </div>
                <div class="item">
                    <i class="user icon"></i>
                    <div class="content">
                    <div class="header">Daniel</div>
                    </div>
                </div>
             </div>
        </div>
        </div>
        </div>
    )
}

export default ManageUsersContainer;