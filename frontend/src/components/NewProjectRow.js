import React from 'react'

function NewProjectRow(props) {
    return(
        <tr>
            <td>{props.project.title}</td>
            <td>{props.project.desc}</td>
            <td>{props.project.created_at}</td>
            <td>
              {props.project.status}
              <button onClick={()=> console.log('remove btn')} className="mini ui right floated blue button">Remove</button>
              <button onClick={()=> console.log('see details')} className="mini ui right floated blue button">Details</button>
            </td>
        </tr>
    )
}

export default NewProjectRow