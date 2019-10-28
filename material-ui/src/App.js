import React, { Component } from 'react';

import { Button, AppBar, Toolbar, IconButton } from '@material-ui/core';

export default class App extends Component {
	render() {
		return(
			<div className="App">
				<AppBar position="static">
					<Toolbar>
						<IconButton></IconButton>
					</Toolbar>
				</AppBar>
				<Button variant="contained" color="primary">Button</Button>
				<Button variant="contained">Without Property Color</Button>
			</div>
			
		);
	}
}
