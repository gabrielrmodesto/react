import React, { Component } from 'react';

export default class State extends Component {
	constructor(props){
		super(props);
		this.state = { 
			name: 'Jonh Doe',
			age: 23
		};
	}
  	render() {
		const {name, age } = this.state;
		return (
			<div>
				<p>{name}</p>
				<p>{age}</p>
			</div>
		);
  	}
}
