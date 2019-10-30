import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';

//component
const InitForm = (props) => {
	return(
		<div>
			<form action="">
				<div>
					<label htmlFor="name">Name</label>
					<Field 
						name="name"
						placeholder="Enter with your name"
						type="text"
						component="input"
					/>
				</div>
			</form>
		</div>
	)
};
export default reduxForm({
	form: 'initForm'
})(InitForm);