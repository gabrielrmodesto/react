import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {getInitialFetch} from './../actions';

class InitForm extends Component{
    componentWillMount(){
        this.props.fetchInitial();
    }
    render (){
        const { onClick, onChangeName } = this.props;
        return(
            <form action="">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <Field 
                        name="name"
                        placeholder="Enter with your name"
                        type="text"
                        component="input"
                        className="form-control"
                        onChange={onChangeName}
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-block" onClick={onClick}>Send</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        initialValues: state.name.data
    }
};
const mapDispatchToProps = (dispatch) =>{
    return {
        fetchInitial: () => dispatch(getInitialFetch())
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)
(reduxForm({
    form: 'initForm',
    enableReinitialize: true
})(InitForm));