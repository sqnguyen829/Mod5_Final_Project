import React from 'react';
import {useSelector} from 'react-redux'
import NewProjectRow from '../components/NewProjectRow'
function ProjectContainer(props) {
    const projects = useSelector(state => state.projects)
    console.log('project container')
    console.log(projects.isProjectLoaded)
    console.log(projects)
    return(
        <div>
            <div className="ui grid container">
                <button onClick={()=> props.history.push("/home/addproject")} className="ui fluid small blue button">Add Projects</button>
                 {/* <div className="row">
                     <div className="column"> */}
                        <table className="ui celled table">
                            <thead>
                                <tr>
                                    <th rowSpan="three wide column">Porject Name</th>
                                    <th rowSpan="eight wide column">Descrption</th>
                                    <th rowSpan="three  wide column">Project created on</th>
                                    <th colSpan="two wide column">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects.isProjectLoaded ? projects.displayProjects.map(project => <NewProjectRow project={project} key={project.id}/>) :''}
                            </tbody>
                        </table>
                     {/* </div>
                 </div> */}
             </div>
        </div>
        
    )
}

export default ProjectContainer;