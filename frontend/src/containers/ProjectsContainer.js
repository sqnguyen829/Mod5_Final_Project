import React from 'react';
import {useSelector} from 'react-redux'
import NewProjectRow from '../components/NewProjectRow'
import { Form, Checkbox } from 'semantic-ui-react'

function ProjectContainer(props) {
    const projects = useSelector(state => state.projects)
    console.log(projects.displayProjects)
    return(
        <div>
            <div className="ui grid container">
                <button onClick={()=> props.history.push("/home/addproject")} className="ui fluid small blue button">Add Projects</button>
                <Form>
                    <div className="ui action input">
                        <input type="text" placeholder="Search by Project Name" />
                        <button className="ui button">Search</button>
                    </div>
                    <Form.Field>
                        Filter by Status
                    </Form.Field>
                    <Form.Field>
                      <Checkbox
                        radio
                        label='Open'
                        name='checkboxRadioGroup'
                        value='this'
                        // checked={this.state.value === 'this'}
                        // onChange={this.handleChange}
                      />
                      <Checkbox
                        radio
                        label='Closed'
                        name='checkboxRadioGroup'
                        value='that'
                        // checked={this.state.value === 'that'}
                        // onChange={this.handleChange}
                      />
                      <Checkbox
                        radio
                        label='In Progress'
                        name='checkboxRadioGroup'
                        value='that'
                        // checked={this.state.value === 'that'}
                        // onChange={this.handleChange}
                      />
                      <Checkbox
                        radio
                        label='Completed'
                        name='checkboxRadioGroup'
                        value='that'
                        // checked={this.state.value === 'that'}
                        // onChange={this.handleChange}
                      />
                    </Form.Field>
                </Form>
                 {/* <div className="row">
                     <div className="column"> */}
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
                                {projects.isProjectLoaded ? projects.displayProjects.map(project => <NewProjectRow project={project} key={project.id} history={props.history}/>) :''}
                            </tbody>
                        </table>
                     {/* </div>
                 </div> */}
             </div>
        </div>
        
    )
}

export default ProjectContainer;