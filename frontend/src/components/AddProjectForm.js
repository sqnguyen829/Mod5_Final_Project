import React from 'react'
// import {Link} from 'react-router-dom'
import {handleNewProject} from '../actions'
import {useDispatch } from 'react-redux'

function AddProjectForm(props) {
    const dispatch = useDispatch()
    return(
        <div>
            <form  onSubmit={(e)=> {dispatch(handleNewProject(e))
                                    props.history.push("/home/projects")}} className='ui form' >
                <div className="two fields">
                    <div className="field">
                        <label>Project Title</label>
                        <input placeholder="Project Title" type="text"></input>
                    </div>
                </div>
                <div className="field">
                    <label>Description</label>
                    <textarea></textarea>
                </div>
                <button className="ui blue button" type="submit">Create Project</button>
            </form>
        </div>
    )
}
export default AddProjectForm