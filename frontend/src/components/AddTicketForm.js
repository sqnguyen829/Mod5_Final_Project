// import React from 'react'
// import {useDispatch } from 'react-redux'

// function AddTicketForm(props) {
//     const dispatch = useDispatch()
//     return(
//         <div>
            
//             <form  onSubmit={(e)=> {dispatch(handleNewProject(e))
//                                     props.history.push("/home/projects")}} className='ui form' >
//                 <div>
//                     <label>Project</label>
//                     <div>
//                         <div class="ui compact menu">
//                             <select class="ui dropdown" value={props.project? props.project.ticket:"Select a project"}>
//                                 <option value="Feature Request">Feature Request</option>
//                                 <option value="Bug Fix Request">Bug Fix Request</option>
//                                 <option value="Remova Feature Request">Remove Feature Request</option>
//                                 <option value="Other Request">Other Request</option>
//                             </select>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="two fields">
//                     <div className="field">
//                         <label>Ticket Title</label>
//                         <input placeholder="Project Title" type="text"></input>
//                     </div>
//                 </div>
//                 <div className="field">
//                     <label>Description</label>
//                     <textarea></textarea>
//                 </div>
//                 <button className="ui blue button" type="submit">Create Project</button>
//             </form>
//         </div>
//     )
// }
// export default AddTicketForm