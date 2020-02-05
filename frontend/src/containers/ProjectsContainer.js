import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import NewProjectRow from '../components/NewProjectRow'
import { Form, Checkbox } from 'semantic-ui-react'
import ProjectGraph from '../components/ProjectGraph'
import { handleProjectTextSearch, initiateProjectSearch, handleCheckFilter } from '../actions'

function ProjectContainer(props) {
    const projects = useSelector(state => state.projects)
    const dispatch = useDispatch()
    return(
        <div>
            <div className="ui grid container">
                {(localStorage.role==='admin'||localStorage.role==='manager')? <button onClick={()=> props.history.push("/home/addproject")} className="ui fluid small blue button">Add Projects</button> : ''}
                <Form>
                    <div className="ui action input">
                        <input onChange = { (event)=> dispatch(handleProjectTextSearch(event.target.value)) }type="text" placeholder="Search by Project Name" />
                        <button onClick={ ()=> dispatch(initiateProjectSearch(projects.projects, projects.projectSearch)) } className="ui button">Search</button>
                    </div>
                    <Form.Field>
                        Filter by Status
                    </Form.Field>
                    <Form.Field>
                    <Checkbox
                        radio
                        label='All'
                        name='checkboxRadioGroup'
                        value='all'
                        checked={projects.projectCheck === 'all'}
                        onChange={() => dispatch(handleCheckFilter(projects, 'all'))}
                      />
                      <Checkbox
                        radio
                        label='Open'
                        name='checkboxRadioGroup'
                        value='open'
                        checked={projects.projectCheck === 'open'}
                        onChange={() => dispatch(handleCheckFilter(projects, 'open'))}
                      />
                      <Checkbox
                        radio
                        label='Closed'
                        name='checkboxRadioGroup'
                        value='closed'
                        checked={projects.projectCheck === 'closed'}
                        onChange={() => dispatch(handleCheckFilter(projects, 'closed'))}
                      />
                      <Checkbox
                        radio
                        label='In Progress'
                        name='checkboxRadioGroup'
                        value='in progress'
                        checked={projects.projectCheck === 'in progress'}
                        onChange={() => dispatch(handleCheckFilter(projects, 'in progress'))}
                      />
                      <Checkbox
                        radio
                        label='Completed'
                        name='checkboxRadioGroup'
                        value='completed'
                        checked={projects.projectCheck === 'completed'}
                        onChange={() => dispatch(handleCheckFilter(projects, 'completed'))}
                      />
                    </Form.Field>
                </Form>
                    <table className="ui celled striped table">
                        <thead>
                            <tr>
                                <th rowSpan="three wide column">Porject Name</th>
                                <th rowSpan="eight wide column">Descrption</th>
                                <th rowSpan="three  wide column">Project created on</th>
                                <th colSpan="two wide column">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.isProjectLoaded? projects.displayProjects.map(project => <NewProjectRow project={project} key={project.id} history={props.history}/>) :''}
                        </tbody>
                    </table>
                    <div className = "sixteen wide column centered row">
                        <ProjectGraph/>
                    </div>
             </div>
        </div>
        
    )
}

export default ProjectContainer;