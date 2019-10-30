import React, { Component } from 'react';
import InitForm from '../components/InitForm';
import { sendServer } from '../actions';
import { connect } from 'react-redux';

//container
class App extends Component {
	onClick = (event, data) => {
		event.preventDefault();
		console.log('Clicked here', data);
		this.props.createName(data);
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

const mapStateToProps = (state) => {
    return {
        initialValues: state.name.data
    }
};
const mapDispatchToProps = (dispatch) =>{
    return {
		createName: (data) => dispatch(sendServer(data))
    }
    
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
