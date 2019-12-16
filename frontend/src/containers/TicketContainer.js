import React from 'react';
function TicketContainer(props) {
    return(
        <div className="ui grid container">
             {/* <div className="row">
                 <div className="column"> */}
                    <table className="ui celled table">
                        <thead>
                            <tr>
                                <th rowSpan="three wide column">Ticket Title</th>
                                <th rowSpan="three wide column">Porject Name</th>
                                <th rowSpan="three  wide column">Priority</th>
                                <th rowSpan="three  wide column">Status</th>
                                <th rowSpan="three  wide column">Ticket Type</th>
                                <th rowSpan="three  wide column">detail</th>
                            </tr>
                            {/* <tr>
                                <th>Ruby</th>
                                <th>JavaScript</th>
                                <th>Python</th>
                            </tr> */}
                        </thead>
                        <tbody>
                            <tr>
                                <td>Bug</td>
                                <td>Project 1</td>
                                <td>High</td>
                                <td>
                                  In Progress
                                </td>
                                <td>
                                   Bug
                                </td>
                                <td>
                                <button>detail</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Add form</td>
                                <td>Project 2</td>
                                <td>Low</td>
                                <td>
                                   Completed
                                </td>
                                <td>
                                   Feature request
                                </td>
                                <td>
                                   <button>detail</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                 {/* </div>
             </div> */}
         </div>
    )
}

export default TicketContainer;