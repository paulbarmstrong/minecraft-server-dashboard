import React from 'react';

class LoadingWheel extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div style={{padding: 30}}>
				<div class="preloader-wrapper big active">
					<div class="spinner-layer">
						<div class="circle-clipper left">
							<div class="circle"></div>
						</div><div class="gap-patch">
							<div class="circle"></div>
						</div><div class="circle-clipper right">
							<div class="circle"></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LoadingWheel;
