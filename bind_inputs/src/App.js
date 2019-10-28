import React, { Component } from 'react';


export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			desc: '',
			age: ''
		}
	}
	handleInput = (event) => {
		const { target } = event
		const { name } = target
		const { value } = target.type === 'checkbox' ? target.checked : target.value
		return this.setState({
			[name]: event.target.value
		})
	}
	render() {
		console.log(this.state)
		return (
			<div>
				<input type="text" name="name" onChange={this.handleInput} />
				<input type="text" name="desc" onChange={this.handleInput} />
				<input type="number" name="age" onChange={this.handleInput} />
			</div>
		);
	}
}

