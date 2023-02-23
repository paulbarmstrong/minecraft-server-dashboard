import React from 'react';

class EventLogs extends React.Component {
	constructor() {
		super()
		this.state = {
			events: []
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
						this.state.events.map(event => 
							<tr>
								<td>{this.getDateString(new Date(event.timestamp))}</td>
								<td>{event.message}</td>
							</tr>
						)
					}
				</tbody>
		  </table>
		)
	}

	fetchData() {
		fetch("https://das9w7os29.execute-api.us-east-1.amazonaws.com/get-latest-minecraft-server-event-logs")
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
