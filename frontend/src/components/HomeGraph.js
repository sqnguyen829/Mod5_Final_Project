import React from 'react';
import CanvasJSReact from '../lib/canvasjs.react'
import { useSelector } from 'react-redux'
// let CanvasJS = CanvasJSReact.CanvasJS
let CanvasJSChart = CanvasJSReact.CanvasJSChart

function HomeGraph() {
		const projects = useSelector(state => state.projects)
		const users = useSelector(state => state.users)
		const tickets = useSelector(state => state.tickets)
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

		let ticketStatus =  {
            open:0,
            closed:0,
            inProgress:0,
            completed:0
        }
        tickets.displayTickets.forEach(ticket=>{
            if(ticket.status === "Open"){
                ticketStatus = {...ticketStatus,
                    open:ticketStatus.open +1}
            }else if(ticket.status === "Closed"){
                ticketStatus = {...ticketStatus,
                    closed:ticketStatus.closed +1}
            }else if(ticket.status === "In Progress"){
                ticketStatus = {...ticketStatus,
                    inProgress:ticketStatus.inProgress +1}
            }else{
                ticketStatus = {...ticketStatus,
                    completed:ticketStatus.completed +1}
            }
        })
		let ticketStat = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "dark2", // "light1", "dark1", "dark2"
			title:{
				text: "Ticket Status"
			},
			data: [{
				type: "pie",
				indexLabel: "{label}: {y}",		
				startAngle: -90,
				dataPoints: [
					{ y: ticketStatus.open, label: "Open" },
					{ y: ticketStatus.closed, label: "Closed" },
					{ y: ticketStatus.inProgress, label: "In Progress" },
					{ y: ticketStatus.completed, label: "Complated" }
				]
			}]
		}

		let userRole =  {
            admin:0,
            manager:0,
            developer:0,
			submitter:0,
			n_a:0
        }
        users.displayUsers.forEach(user=>{
            if(user.role === "admin"){
                userRole = {...userRole,
                    admin:userRole.admin +1}
            }else if(user.role === "manager"){
                userRole = {...userRole,
                    manager:userRole.manager +1}
            }else if(user.role === "developer"){
                userRole = {...userRole,
                    developer:userRole.developer +1}
            }else if(user.role === "submitter"){
                userRole = {...userRole,
                    submitter:userRole.submitter +1}
            }else{
				userRole = {...userRole,
                    n_a:userRole.n_a +1}
			}
        })
		let userStat = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "dark2", // "light1", "dark1", "dark2"
			title:{
				text: "User Role Stat"
			},
			data: [{
				type: "pie",
				indexLabel: "{label}: {y}",		
				startAngle: -90,
				dataPoints: [
					{ y: userRole.admin, label: "Admin" },
					{ y: userRole.manager, label: "Manager" },
					{ y: userRole.developer, label: "Developer" },
					{ y: userRole.submitter, label: "Submittter" },
					{ y: userRole.n_a, label: "N/A" },
				]
			}]
		}
		
		return (
		<div className="">
			<div className="row">
				<div className="column">
					<CanvasJSChart options = {options} />
				</div>
				<div className="column">
					<CanvasJSChart options = {ticketStat} />
				</div>
				<div className="column">
					<CanvasJSChart options = {userStat} />
				</div>
			</div>
		</div>
		);
	
}
export default HomeGraph;

// {/* /* onRef={ref => this.chart = ref} */
// /> */}
// {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
