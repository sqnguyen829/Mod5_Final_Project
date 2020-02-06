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
                        <button onClick={ ()=> dispatch(initiateProjectSearch(projects)) } className="ui button">Search</button>
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
                        checked={projects.projectCheck === 'All'}
                        onChange={() => dispatch(handleCheckFilter(projects, 'All'))}
                      />
                      <Checkbox
                        radio
                        label='Open'
                        name='checkboxRadioGroup'
                        value='open'
                        checked={projects.projectCheck === 'Open'}
                        onChange={() => dispatch(handleCheckFilter(projects, 'Open'))}
                      />
                      <Checkbox
                        radio
                        label='Closed'
                        name='checkboxRadioGroup'
                        value='closed'
                        checked={projects.projectCheck === 'Closed'}
                        onChange={() => dispatch(handleCheckFilter(projects, 'Closed'))}
                      />
                      <Checkbox
                        radio
                        label='In Progress'
                        name='checkboxRadioGroup'
                        value='in progress'
                        checked={projects.projectCheck === 'In Progress'}
                        onChange={() => dispatch(handleCheckFilter(projects, 'In Progress'))}
                      />
                      <Checkbox
                        radio
                        label='Completed'
                        name='checkboxRadioGroup'
                        value='completed'
                        checked={projects.projectCheck === 'Completed'}
                        onChange={() => dispatch(handleCheckFilter(projects, 'Completed'))}
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