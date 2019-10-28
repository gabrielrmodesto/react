import React, { Component } from 'react';

export default class InputEvent extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			data: []
		};
	}
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	insertToData = () => {
		const arr = this.state.data;
		arr.push(this.state.name);
		this.setState({
			name: '',
			data: arr
		});
		console.log(this.state);
	}
	render() {
		const { data } = this.state; 
		return(
			<div>
				<input type="text" onChange={this.handleChange} name="name" placeholder="Type your name" />
				<button type="button" onClick={this.insertToData}>OK</button>
				<ul>
					{
						data.map(item => (
							<li key={item}>{item}</li>
						))
					}
				</ul>
			</div>
		);
	}
}
