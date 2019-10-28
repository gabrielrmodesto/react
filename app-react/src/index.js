import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Hello';
import Clock from './Clock';
import Props from './Props';
import State from './State';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<Props attr='p' attr1='VALUE1' attr2='VALUE2' />, document.getElementById('root'));
ReactDOM.render(<State />, document.getElementById('root'));

serviceWorker.unregister();
