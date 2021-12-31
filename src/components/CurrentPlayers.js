import React from 'react';

class CurrentPlayers extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<table class="blue-grey darken-3">
				<thead><tr/></thead>
				<tbody>
					{
						this.props.players ? (
							this.props.players.sample.map(player => 
								<tr>
									<td>{player.name}</td>
								</tr>
							)
						) : (
							<div/>
						)
					}
				</tbody>
		  </table>
		);
	}
}

export default CurrentPlayers;
