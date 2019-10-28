import React, {	Component} from 'react';

export default class Props extends Component {
	constructor(props){
		super(props);
		const { attr, attr1, attr2 } = this.props;
		console.log(attr, attr1, attr2);
	}
	render() {
		const { attr, attr1, attr2 } = this.props;
		return (
			<div>
				{ attr === 'p' ? <p>Props</p> : <h1>Props</h1>}
			</div>
		);
	}
}