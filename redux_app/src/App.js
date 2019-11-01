import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from 'redux';
import { clickHelloAction } from './actions/index';
import { connect } from 'react-redux';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			text: ''
		}
	}
	handleInput = (event) => {
		this.setState({
			text: event.target.value
		})
	}
	render(){
		const { text } = this.state;
		const { msg, clickHelloAction } = this.props;
		return (
			<div className="App">
				<input type="text" id="inputText" className="form-control" onChange={this.handleInput} />
				<button type="button" onClick={() => clickHelloAction(text)}>Click to Dispacth</button>
				<h1>{ msg }</h1>
			</div>
		  );
	} 
}

const mapStateToProps = (store) => {
	return {
		msg: store.clickReducers.msg
	}
}
const mapDispatchToProps = (dispatch) => 
	bindActionCreators({clickHelloAction}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(App);
