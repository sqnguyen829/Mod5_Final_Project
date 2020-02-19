import React from 'react'
import { Button,Modal } from 'semantic-ui-react'
import { useDispatch }from 'react-redux'
import { handleEditProjectTicket } from '../actions'
function EditTicketModal(props) {
    const dispatch = useDispatch()
    return(
        <Modal trigger={<Button color='blue' size='mini'>Edit Ticket</Button>} >
            <div style ={{background:'#cad7ed'}}>
                                    <form  onSubmit={(e)=> dispatch(handleEditProjectTicket(e,props.project,props.ticket))} className='ui form' >
                                        <div className="two fields">
                                            <div className="field">
                                                <label>Ticket Title</label>
                                                <input defaultValue={props.ticket.title} type="text"></input>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label>Description</label>
                                            <textarea defaultValue={props.ticket.desc} type="text"></textarea>
                                        </div>
                                        <label>Status</label>
                                        <div>
                                            <div className="ui compact menu">
                                                <select onChange={(e, defaultValue)=> defaultValue=e.target.value} defaultValue={props.ticket.status} className="ui dropdown">
                                                    <option value="Open">Open</option>
                                                    <option value="Closed">Closed</option>
                                                    <option value="In Progress">In Progress</option>
                                                    <option value="Completed">Completed</option>
                                                </select>
                                            </div>
                                        </div>
                                        <label>Type</label>
                                        <div>
                                            <div className="ui compact menu">
                                                <select onChange={( e, defaultValue)=> defaultValue=e.target.value} defaultValue={props.ticket.type_of_ticket} className="ui dropdown">
                                                    <option value="Feature Request">Feature Request</option>
                                                    <option value="Bug Fix Request">Bug Fix Request</option>
                                                    <option value="Remova Feature Request">Remove Feature Request</option>
                                                    <option value="Other Request">Other Request</option>
                                                </select>
                                            </div>
                                        </div>
                                        <label>Priority Level</label>
                                        <div>
                                            <div className="ui compact menu">
                                                <select onChange={(e, defaultValue)=> defaultValue=e.target.value} defaultValue={props.ticket.priority} className="ui dropdown">
                                                    <option value="Low Priority">Low Priority</option>
                                                    <option value="Medium Priority">Medium Priority</option>
                                                    <option value="High Priority">High Priority</option>
                                                </select>
                                            </div>
                                        </div>
                                        <button className="ui blue button" type="submit">Edit Project</button>
                                    </form>
                                    </div>
        </Modal>
    )
}

export default EditTicketModal