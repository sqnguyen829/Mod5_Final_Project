import React from 'react';
import ProjectGraph from '../components/ProjectGraph'
import TicketGraph from '../components/TicketGraph'
import UserGraph from '../components/UserGraph'

function HomeGraph() {
		return(
			<div>
				<div >
					<div class="ui inverted segment">
					<ProjectGraph/>
					</div>
				</div>
				<div class="ui right aligned grid">
					<div class="right floated left aligned six wide column">
						<div class="ui inverted segment">
						<TicketGraph/>
						</div>
					</div>
					<div class="left floated right aligned six wide column">
						<div class="ui inverted segment">
						<UserGraph/>
						</div>
					</div>
				</div>

			</div>
		);
}
export default HomeGraph;