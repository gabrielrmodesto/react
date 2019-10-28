import React, {	Component } from 'react';

export default class OtherClock extends Component {
	constructor(props){
		super(props);
		this.state = {
			time: new Date().toLocaleString('en-US', {
							hour: 'numeric',
							minute: 'numeric',
							second: 'numeric',
							hour12: true
						})
		}
	}
	componentDidMount(){
		setInterval(() => this.updateClock(), 1000);
	}
	updateClock(){
		this.setState({
			time: new Date().toLocaleString('en-US', {
				hour: 'numeric',
				minute: 'numeric',
				second: 'numeric',
				hour12: true
			})
		})
	}
	render() {
		const { time } = this.state; 
		return ( 
			<h1>{ time	}</h1>
		);
	}
}