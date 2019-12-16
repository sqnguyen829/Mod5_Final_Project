import React from 'react';
import NewProjectRow from '../components/NewProjectRow'
function ProjectContainer(props) {
    return(
    
        <div className="ui grid container">
             {/* <div className="row">
                 <div className="column"> */}
                    <table className="ui celled table">
                        <thead>
                            <tr>
                                <th rowSpan="three wide column">Porject Name</th>
                                <th rowSpan="eight wide column">Descrption</th>
                                <th rowSpan="three  wide column">Owner of Project</th>
                                <th colSpan="two wide column">Status</th>
                            </tr>
                            {/* <tr>
                                <th>Ruby</th>
                                <th>JavaScript</th>
                                <th>Python</th>
                            </tr> */}
                        </thead>
                        <tbody>
                            <tr>
                                <td>Alpha Team</td>
                                <td>Project 1</td>
                                <td>2</td>
                                <td>
                                  detail
                                </td>
                            </tr>
                            <tr>
                                <td>Beta Team</td>
                                <td>Project 2</td>
                                <td>52</td>
                                <td>
                                   detail
                                </td>
                            </tr>
                        </tbody>
                    </table>
                 {/* </div>
             </div> */}
         </div>
        
    )
}

export default ProjectContainer;