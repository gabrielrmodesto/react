import React, { Component } from 'react';
import InitForm from '../components/InitForm';

//container
export default class App extends Component {
	onClick = (event) => {
		event.preventDefault();
		console.log('Clicked here');
	}
	onChangeName = ({ target }) => {
		const { name, value } = target;
		console.log('Target input', name, value);
	}
	render() {
		return(
			<div className="col-10">
				<div className="card">
					<div className="card-header">
						Redux Form
					</div>
					<div className="card-body">
						<InitForm 
							onClick={this.onClick}
							onChangeName={this.onChangeName}
						/>
					</div>
					<div className="card-footer">
						Footer Redux
					</div>
				</div>
			</div>
		);
	}
}
