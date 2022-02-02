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
		.then(res => {
			if (res.status != 200) {
				throw new Error("Error from API gateway");
			} else {
				return res.json()
			}
		})
		.then(body => {
			this.setState({
				events: body.events
			})
		}, err => {})
	}

	getDateString(date) {
		return date.toLocaleDateString() + " "
			 + date.toLocaleTimeString('en-us',{timeZoneName:'short'})
	}
}

export default EventLogs;
