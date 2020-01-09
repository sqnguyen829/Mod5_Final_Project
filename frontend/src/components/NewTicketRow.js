import React from 'react' 
// import TicketDetailOnHover from './TicketDetailOnHover'

function NewTicketRow(props) {
    // const dispatch = useDispatch()
    return(
        <tr >
            <td>{props.ticket.title}</td>
            <td>{props.ticket.desc}</td>
            <td>{props.ticket.project.title}</td>
            <td>
              {props.ticket.status}
              {/* <button onClick={()=> dispatch(removeProject(props.project))} className="mini ui right floated blue button">Remove</button> */}
              {/* <button onClick={()=> {dispatch(handleShowProject(props.project))
                                    props.history.push(`/home/projects/${props.project.id}`)}} className="mini ui right floated blue button">Details</button> */}
            </td>
        </tr>
    )
}

export default NewTicketRow