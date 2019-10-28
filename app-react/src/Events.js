import React, { Component } from 'react';

export default class Events extends Component {
	constructor(props){
		super(props);
		this.state = {
			click: 0
		};
	}
	clickMethod = () => {
		console.log('-- BEGIN --', this.state.click);
		this.setState({
			click: this.state.click + 1
		})
		console.log('-- END --', this.state.click);
	}
	render() {
		return(
			<div>
				<button type="button" onClick={this.clickMethod}>Click Me</button>
			</div>
		);
	}
}
