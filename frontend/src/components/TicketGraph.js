import React from 'react';
import CanvasJSReact from '../lib/canvasjs.react'
import { useSelector } from 'react-redux'
let CanvasJSChart = CanvasJSReact.CanvasJSChart

function TicketGraph() {

		const tickets = useSelector(state => state.tickets)
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
					{ y: ticketStatus.completed, label: "Completed" }
				]
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {ticketStat} />
		</div>
		);
	
}
export default TicketGraph;