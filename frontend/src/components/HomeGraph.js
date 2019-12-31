import React from 'react';
import CanvasJSReact from '../lib/canvasjs.react'
import { useSelector } from 'react-redux'
// let CanvasJS = CanvasJSReact.CanvasJS
let CanvasJSChart = CanvasJSReact.CanvasJSChart

function HomeGraph() {
        const projects = useSelector(state => state.projects)
        let projectStatus =  {
            open:0,
            closed:0,
            inProgress:0,
            completed:0
        }
        projects.displayProjects.forEach(project=>{
            if(project.status === "Open"){
                projectStatus = {...projectStatus,
                    open:projectStatus.open +1}
            }else if(project.status === "Closed"){
                projectStatus = {...projectStatus,
                    closed:projectStatus.closed +1}
            }else if(project.status === "In Progress"){
                projectStatus = {...projectStatus,
                    inProgress:projectStatus.inProgress +1}
            }else{
                projectStatus = {...projectStatus,
                    completed:projectStatus.completed +1}
            }
        })
		let options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "dark2", // "light1", "dark1", "dark2"
			title:{
				text: "Project Status"
			},
			data: [{
				type: "pie",
				indexLabel: "{label}: {y}",		
				startAngle: -90,
				dataPoints: [
					{ y: projectStatus.open, label: "Open" },
					{ y: projectStatus.closed, label: "Closed" },
					{ y: projectStatus.inProgress, label: "In Progress" },
					{ y: projectStatus.completed, label: "Complated" }
				]
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	
}
export default HomeGraph;