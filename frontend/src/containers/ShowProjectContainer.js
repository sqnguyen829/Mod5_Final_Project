import React from 'react'
import { useSelector } from 'react-redux'

function ShowProjectContainer(props) {
    const project = useSelector(state=> state.projects.currentProjectDetail)
    return(
        <div>
            <h1>Title: {project.title}</h1>
        </div>
    )
}

export default ShowProjectContainer