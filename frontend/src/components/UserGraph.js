import React from 'react';
import CanvasJSReact from '../lib/canvasjs.react'
import { useSelector } from 'react-redux'
let CanvasJSChart = CanvasJSReact.CanvasJSChart

function UserGraph() {
		const users = useSelector(state => state.users)

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
				text: "User Role Stats"
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
		<div >
			<CanvasJSChart options = {userStat} />
		</div>
		);
}
export default UserGraph;