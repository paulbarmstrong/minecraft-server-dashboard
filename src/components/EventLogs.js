import React from 'react';
import LoadingWheel from './LoadingWheel';

class EventLogs extends React.Component {
	constructor() {
		super()
		this.state = {
		}
		this.fetchData = this.fetchData.bind(this)
	}
	
	componentDidMount() {
		this.fetchData()
		setInterval(this.fetchData, 10000)
	}

	render() {
		return (
			<table class="blue-grey darken-3">
				<thead>
					<tr>
						<th>Timestamp</th>
						<th>Event</th>
					</tr>
				</thead>
				<tbody>
					{
						this.state.events ? (
							this.state.events.map(event => 
								<tr>
									<td>{this.getDateString(new Date(event.timestamp))}</td>
									<td>{event.message}</td>
								</tr>
							)
						) : (
							<LoadingWheel/>
						)
					}
				</tbody>
		  </table>
		)
	}

	fetchData() {
		fetch("https://zm8ejl2w3m.execute-api.us-east-2.amazonaws.com/latestMinecraftServerEventLogs")
		.then(res => res.json())
		.then(res => {
			this.setState({
				events: res.events
			})
		})
	}

	getDateString(date) {
		return date.toLocaleDateString() + " "
			 + date.toLocaleTimeString('en-us',{timeZoneName:'short'})
	}
}

export default EventLogs;
