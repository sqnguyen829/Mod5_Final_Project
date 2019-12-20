import React from 'react'
import { Button,Modal } from 'semantic-ui-react'

function CreateTicketModal(props) {
    return(
        <Modal trigger={<Button color='blue' size='mini'>Add a Ticket</Button>} >
            <div>
                <form  onSubmit={()=> console.log('Making tickets') } className='ui form' >
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
                    <div>
                        <div class="ui selection dropdown">
                            <input type="hidden" name="priority"></input>
                            <i class="dropdown icon"></i>
                            <div class="default text">Prioirty</div>
                            <div class="menu">
                                <div class="item" data-value="0">Low Priority</div>
                                <div class="item" data-value="1">Medium Priority</div>
                                <div class="item" data-value="2">High Priority</div>
                            </div>
                        </div>
                    </div>
                    <button className="ui blue button" type="submit">Create Ticket</button>
                </form>
            </div>
        </Modal>
    )
}

export default CreateTicketModal