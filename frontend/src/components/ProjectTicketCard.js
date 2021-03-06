import React from 'react'
import EditTicketModal from './EditTicketModal'
import { useDispatch } from 'react-redux'
import { handleRemoveProjectTicket, handleTickets } from '../actions'
    // t.integer "user_id"
//     t.integer "project_id"
//     t.string "title"
//     t.string "desc"
//     t.string "status"
//     t.string "priority"
//     t.string "type_of_ticket"
//     t.datetime "created_at", 
//     t.datetime "updated_at",
function ProjectTicketCard(props) {
    const dispatch = useDispatch()
    return(
        <div className="ui raised very padded text container segment" style ={{background:'#cad7ed'}}>
            <h6 className="mini ui right floated segment" style ={{background:'#e6e7e8'}}>Created by: {props.ticket? props.ticket.user.firstname + ' ' + props.ticket.user.lastname : 'Unknown'}</h6>
            <h2 className="ui header"> Ticket: {props.ticket.title}</h2>
            <h4 className="ui horizontal divider header">
                Description
            </h4>
            <p>{props.ticket.desc}</p>
            <div className="ui divider"></div>
            <h5 className="mini ui right floated segment" style ={{background:'#e6e7e8'}}>Status: {props.ticket.status}</h5>
            <h5 className="mini ui right floated segment" style ={{background:'#e6e7e8'}}>Priority: {props.ticket.priority}</h5>
            <h5 className="mini ui right floated segment" style ={{background:'#e6e7e8'}}>Ticket Type: {props.ticket.type_of_ticket}</h5>
            {localStorage.role!=='N/A'?<div><EditTicketModal ticket={props.ticket} project={props.project}/>
            <div className="ui divider"></div>
            <button onClick={()=> {
                                    dispatch(handleRemoveProjectTicket(props.ticket,props.project))
                                    dispatch(handleTickets)
                                    }} className="mini ui left floated red button">Remove Ticket</button>
            </div>
            :
            ''}
        </div>
    )
}

export default ProjectTicketCard