import React from 'react';
import './App.css';
import ServerStatus from './ServerStatus.js'
import CurrentPlayers from './CurrentPlayers.js'
import EventLogs from './EventLogs.js'
import ServerLogs from './ServerLogs.js'


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			title: (Math.random() > 0.5 ? "BI GOOF" : "BIG OOF")
		}
	}

	componentDidMount() {
		fetch("https://hi2g7g24r4.execute-api.us-east-2.amazonaws.com/minecraftServerStatus")
			.then(res => res.json())
			.then(res => {
				this.setState({
					status: res.status,
					players: res.currentPlayers
				})
			})
	}

	render() {
		return (
			<div class="App blue-grey darken-4" style={{height: window.screen.height}}>
				<div class="section white-text">
					<div class="container">
						<div class="container blue-grey darken-4">

							{/* Banner */}
							<div class="center">
								<h1>{this.state.title}</h1>
									<h6>Minecraft Server Dashboard</h6>
								<br/>
							</div>

							<ServerStatus status={this.state.status} players={this.state.players} requestProvisioning={() => this.requestProvisioning()}/>

							{/* Navbar */}
							<nav class="nav-extended">
								<div class="nav-content">
									<ul class="tabs tabs-transparent blue-grey darken-3">
										<li class="tab"><a class="active" href="#players">Current Players</a></li>
										<li class="tab"><a href="#server-events">Event Logs</a></li>
									</ul>
								</div>
							</nav>

							<div id="players"><CurrentPlayers players={this.state.players}/></div>
							<div id="server-events" class="col s12"><EventLogs/></div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	requestProvisioning() {
		fetch("https://4wiouuu6gl.execute-api.us-east-2.amazonaws.com/startProvisioningMinecraftServer", {method: "POST"})
			.then(res => setTimeout(() => this.forceUpdate(), 2000))
	}
}

export default App;
