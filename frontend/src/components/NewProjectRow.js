import React from 'react' 
import { useDispatch } from 'react-redux'
import { handleShowProject } from '../actions/index'

function NewProjectRow(props) {
    const dispatch = useDispatch()
    return(
        <tr>
            <td>{props.project.title}</td>
            <td>{props.project.desc}</td>
            <td>{props.project.created_at}</td>
            <td>
              {props.project.status}
              <button onClick={()=> console.log('remove btn')} className="mini ui right floated blue button">Remove</button>
              <button onClick={()=> {dispatch(handleShowProject(props.project))
                                    props.history.push(`/home/projects/${props.project.id}`)}} className="mini ui right floated blue button">Details</button>
            </td>
        </tr>
    )
}

export default NewProjectRow