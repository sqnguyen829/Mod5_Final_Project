import React from 'react';
import {useSelector} from 'react-redux'
import NewTicketRow from '../components/NewTicketRow'
function TicketContainer(props) {
    const tickets = useSelector(state => state.tickets)
    return(
        <div className="ui grid container">
             {/* <div className="row">
                 <div className="column"> */}
                    <table className="ui celled striped table">
                            <thead>
                                <tr>
                                    <th rowSpan="three wide column">Ticket Name</th>
                                    <th rowSpan="eight wide column">Desc</th>
                                    <th rowSpan="three  wide column">Project Name</th>
                                    <th colSpan="two wide column">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tickets.isTicketLoaded ? tickets.displayTickets.map(ticket => <NewTicketRow ticket={ticket} key={ticket.id} history={props.history}/>) :''}
                            </tbody>
                        </table>
                 {/* </div>
             </div> */}
         </div>
    )
}

export default TicketContainer;