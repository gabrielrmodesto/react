import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    console.log('Mounted');
    this.props.fetchData();
  }
  return (
    <div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
   // fetchData: () => dispatch(fn)
  }
}

export default App;
