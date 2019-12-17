import React from 'react'
import {Link} from 'react-router-dom'
// import handleNewProject from '../actions'

function AddProjectForm() {
    return(
        <div>
            <form className='ui form'>
                <div class="two fields">
                    <div class="field">
                        <label>Project Title</label>
                        <input placeholder="Project Title" type="text"></input>
                    </div>
                </div>
                <div class="field">
                    <label>Description</label>
                    <textarea></textarea>
                </div>
                <button onClick={()=>console.log('create project')} className="ui blue button">Create Project</button>
            </form>
        </div>
    )
}
export default AddProjectForm