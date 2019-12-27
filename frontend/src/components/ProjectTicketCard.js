import React from 'react'

function ProjectTicketCard(props) {
    return(
        <div className="ui raised very padded text container segment">
            <h2 className="ui header"> Ticket: {props.ticket.title}</h2>
            <h4 className="ui horizontal divider header">
                Description
            </h4>
            <p>{props.ticket.title}</p>
            <div className="ui divider"></div>
            <button className="mini ui left floated blue button"> Edit</button>
        </div>
    )
}

export default ProjectTicketCard