import React from 'react'
import { Button,Modal } from 'semantic-ui-react'
import { useDispatch }from 'react-redux'
import { handleNewProjectTicket, handleNewTicket } from '../actions'
function CreateTicketModal(props) {
    const dispatch = useDispatch()
    return(
        <Modal trigger={<Button color='blue' size='mini'>Add a Ticket</Button>} >
            <div>
                <form  onSubmit={(e)=> {dispatch(handleNewProjectTicket(e,props.project))
                                        dispatch(handleNewTicket(e,props.project))}} className='ui form' >
                    <div className="two fields">
                        <div className="field">
                            <label>Ticket Title</label>
                            <input type="text"></input>
                        </div>
                    </div>
                    <div className="field">
                        <label>Description</label>
                        <textarea type="text"></textarea>
                    </div>
                    <label>Type of Ticket</label>
                    <div>
                        <div className="ui compact menu">
                            <select className="ui dropdown">
                                <option value="Feature Request">Feature Request</option>
                                <option value="Bug Fix Request">Bug Fix Request</option>
                                <option value="Remova Feature Request">Remove Feature Request</option>
                                <option value="Other Request">Other Request</option>
                            </select>
                        </div>
                    </div>
                    <div className="ui compact menu">
                        <select className="ui dropdown">
                            <option value="Low Priority">Low Priority</option>
                            <option value="Medium Priority">Medium Priority</option>
                            <option value="High Priority">High Priority</option>
                        </select>
                    </div>
                    <button className="ui blue button" type="submit">Create Ticket</button>
                </form>
            </div>
        </Modal>
    )
}

export default CreateTicketModal