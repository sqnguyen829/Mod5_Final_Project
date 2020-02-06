import React from 'react';
import ProjectGraph from '../components/ProjectGraph'
import TicketGraph from '../components/TicketGraph'
import UserGraph from '../components/UserGraph'

function HomeGraph() {
		return(
			<div>
				<div >
					<div className="ui inverted segment">
					<ProjectGraph/>
					</div>
				</div>
				<div className="ui right aligned grid">
					<div className="right floated left aligned six wide column">
						<div className="ui inverted segment">
						<TicketGraph/>
						</div>
					</div>
					<div className="left floated right aligned six wide column">
						<div className="ui inverted segment">
						<UserGraph/>
						</div>
					</div>
				</div>

			</div>
		);
}
export default HomeGraph;