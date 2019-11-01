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
	render(){
		const { text } = this.state;
		const { msg, clickHelloAction } = this.props;
		return (
			<div className="App">
				<button type="button" onClick={() => clickHelloAction()}>Click to Dispacth</button>
				<h1>{ msg }</h1>
			</div>
		  );
	} 
}

const mapStateToProps = (store) => {
	console.log('STORE APP',store);
	return {
		msg: store.clickReducers.msg
	}
}
const mapDispatchToProps = (dispatch) => 
	bindActionCreators({clickHelloAction}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(App);
