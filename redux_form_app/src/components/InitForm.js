import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

//component
const InitForm = ({ onClick, onChangeName }) => {
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
};
export default reduxForm({
	form: 'initForm'
})(InitForm);