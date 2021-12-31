import React from 'react';
import LoadingWheel from './LoadingWheel';

class ServerStatus extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div class="row">
				<div class="col s4 offset-s4">
					<div class="card blue-grey darken-3 row">
						{
							(this.props.status && this.props.players) ? (
								<div>
									<div class="col s12">
									<h6 class="left">Status:</h6>
									<h6 class={"right "+this.getColorForStatus(this.props.status)+"-text"}>{this.props.status}</h6>
									</div>
									<div class="col s12">
										<h6 class="left">Players:</h6>
										<h6 class="right">{this.props.players.now}/{this.props.players.max}</h6>
									</div>
									{
										this.props.status === "Deprovisioned" ? (
											<div class={"btn col s12 orange" + (this.props.requestedProvisioning ? " disabled" : "")} onClick={() => this.props.requestProvisioning()}>
												Request Provisioning
											</div>
										) : (
											<div/>
										)
									}
								</div>
							) : (
								<div class="col s12 center">
									<LoadingWheel/>
								</div>
							)
						}
					</div>
				</div>
			</div>
		);
	}

	getColorForStatus(status) {
		if (status === "Provisioning" || status === "Provisioned") {
			return "orange"
		} else if (status === "Available") {
			return "green"
		} else {
			return "grey"
		}
	}
}

export default ServerStatus;
