import React from 'react';
// import { Grid } from 'semantic-ui-react'
import ProjectGraph from '../components/ProjectGraph'
import TicketGraph from '../components/TicketGraph'
import UserGraph from '../components/UserGraph'

function HomeGraph() {
		return(
		<div className="">
			<div className="row">
				<div className="column">
					<ProjectGraph/>
				</div>
				<div className="column">
					<TicketGraph/>
				</div>
				<div className="column">
					<UserGraph/>
				</div>
			</div>
		</div>
		);
	
}
export default HomeGraph;

// {/* /* onRef={ref => this.chart = ref} */
// /> */}
// {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
