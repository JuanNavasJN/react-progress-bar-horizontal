import React from 'react';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let reading = {
			name: 'Apples',
			value: 23,
			color: 'rgb(31, 90, 246)'
		};

		const parent = {
			reading
		};

		return (
			<div className="progress-bar">
				<div className="value">
					<div style={{ color: parent.reading.color, width: '5%' }}>
						<span>{parent.reading.value}%</span>
					</div>
				</div>
				{/* <div className="scale">
					<div
						className="graduation"
						style={{ color: parent.reading.color, width: parent.reading.value + '%' }}
					>
						<span>|</span>
					</div>
				</div> */}
				<div className="bar">
					<div style={{ backgroundColor: parent.reading.color, width: parent.reading.value + '%' }} />
					<div style={{ backgroundColor: '#d3d3d3', width: 100 - parent.reading.value + '%' }} />
				</div>
				{/* <div className="legend">
					<div>
						<span className="dot" style={{ color: parent.reading.color }}>
							●
						</span>
						<span className="label">{parent.reading.name}</span>
					</div>
				</div> */}
			</div>
		);
	}
}

export default App;
