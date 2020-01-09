import React from 'react';
import ProjectGraph from '../components/ProjectGraph'
import TicketGraph from '../components/TicketGraph'
import UserGraph from '../components/UserGraph'

function HomeGraph() {
		return(
			<div class="ui right aligned grid">
				<div class="left floated right aligned six wide column">
					<div class="ui inverted segment">
					<ProjectGraph/>
					</div>
				</div>
				<div class="right floated left aligned six wide column">
					<div class="ui inverted segment">
					<TicketGraph/>
					</div>
				</div>
				<div class="sixteen wide column centered row">
					<div class="ui inverted segment">
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
