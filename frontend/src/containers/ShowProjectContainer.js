import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button,Modal } from 'semantic-ui-react'
import { handleEditProject } from '../actions'
import ProjectTicketCard from '../components/ProjectTicketCard'
import CreateTicketModal from '../components/CreateTicketModal'

function ShowProjectContainer(props) {
    const project = useSelector(state=> state.projects.currentProjectDetail)
    const dispatch = useDispatch()
    const projects = useSelector(state=> state.projects.displayProjects)
    const projectTicketCheck = project.project_tickets? project.project_tickets[0] : null

    return(
        <div>
            {project? 
                <div >
                    {console.log(project)}
                    <div className="ui two column very relaxed grid">
                        <div className="column">
                            <div className="ui raised very padded text container segment">
                                <h6 className="mini ui right floated segment">Created by: {project.user? project.user.firstname + ' ' + project.user.lastname : 'Unknown'}</h6>
                                <h2 className="ui header"> {project.title}</h2>
                                <h4 className="ui horizontal divider header">
                                    Description
                                </h4>
                                <p>{project.desc}</p>
                                <div className="ui divider"></div>
                                <h5 className="mini ui right floated segment">Status: {project.status}</h5>
                                { localStorage.role=== ('admin'||'manager')?
                                    <Modal trigger={<Button color='blue' size='mini'>Edit</Button>} >
                                        <div>
                                        <form  onSubmit={(e)=> {dispatch(handleEditProject(e,project,projects))
                                                                props.history.push(`/home/projects/${project.id}`)}} className='ui form' >
                                            <div className="two fields">
                                                <div className="field">
                                                    <label>Project Title</label>
                                                    <input defaultValue={project.title} type="text"></input>
                                                </div>
                                            </div>
                                            <div className="field">
                                                <label>Description</label>
                                                <textarea defaultValue={project.desc} type="text"></textarea>
                                            </div>
                                            <label>Status</label>
                                            <div>
                                                <div className="ui compact menu">
                                                    <select className="ui dropdown">
                                                        <option value="Open">Open</option>
                                                        <option value="Closed">Closed</option>
                                                        <option value="In Progress">In Progress</option>
                                                        <option value="Completed">Completed</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <button className="ui blue button" type="submit">Edit Project</button>
                                        </form>
                                        </div>
                                    </Modal>
                                :
                                ''
                                }
                                <button onClick={()=>props.history.push('/home/projects')} className="mini ui left floated blue button"> Back to Project List</button>
                            </div>
                            <div>
                                {projectTicketCheck? 
                                    <div>
                                        {project.project_tickets.map(ticket => <ProjectTicketCard ticket={ticket} key={ticket.id} project={project}/>)}
                                        {localStorage.role!== 'N/A'? <CreateTicketModal project={project}/>:''}
                                    </div>
                                :
                                <div className="ui raised very padded text container segment">
                                    <h2 className="ui header">No tickets for this project</h2>
                                    {localStorage.role!== 'N/A'? <CreateTicketModal project={project}/>:''}
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="ui card">
                        <div className="content">
                            <i className="user icon"></i>Current Project Members
                            <div className="ui divider"></div>
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