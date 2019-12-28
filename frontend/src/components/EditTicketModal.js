import React from 'react'
import { Button,Modal } from 'semantic-ui-react'
import { useDispatch }from 'react-redux'
import { handleEditProjectTicket } from '../actions'
    // t.integer "user_id"
//     t.integer "project_id"
//     t.string "title"
//     t.string "desc"
//     t.string "status"
//     t.string "priority"
//     t.string "type_of_ticket"
//     t.datetime "created_at", 
//     t.datetime "updated_at",
function EditTicketModal(props) {
    const dispatch = useDispatch()
    return(
        <Modal trigger={<Button color='blue' size='mini'>Edit Ticket</Button>} >
            
        </Modal>
    )
}

export default EditTicketModal