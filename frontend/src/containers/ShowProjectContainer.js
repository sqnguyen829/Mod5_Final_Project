import React from 'react'
import { useSelector } from 'react-redux'

function ShowProjectContainer(props) {
    const project = useSelector(state=> state.projects.currentProjectDetail)
    console.log(project)
    return(
        <div>
            {project? 
                <div >
                    <div className="ui two column very relaxed grid">
                        <div className="column">
                            <div className="ui raised very padded text container segment">
                                <h6 class="mini ui right floated segment">Created by: {project.user.firstname + ' ' + project.user.lastname}</h6>
                                <h2 className="ui header"> {project.title}</h2>
                                <h4 className="ui horizontal divider header">
                                    Description
                                </h4>
                                <p>{project.desc}</p>
                                <div className="ui divider"></div>
                                <h5 class="mini ui right floated segment">Status: {project.status}</h5>
                                <button className="mini ui left floated blue button"> Edit</button>
                                <button onClick={()=>props.history.push('/home/projects')} className="mini ui left floated blue button"> Back to Project List</button>
                            </div>
                            <div className="ui raised very padded text container segment">
                                <h2 className="ui header"> Ticket: Some ticket name</h2>
                                <h4 className="ui horizontal divider header">
                                    Description
                                </h4>
                                <p>Issue to be resolved</p>
                                <div className="ui divider"></div>
                                <button className="mini ui left floated blue button"> Edit</button>
                            </div>
                        </div>
                    </div>
                    <div class="ui card">
                        <div class="content">
                            <a class="header"><i class="user icon"></i>Current Project Members</a>
                            <div >
                              <ul>Steven</ul>
                              <ul>Kay</ul>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div>
                    <button onClick={()=>props.history.push('/home/projects')} >Back to Projects</button>
                </div>
            }
        </div>
    )
}

export default ShowProjectContainer